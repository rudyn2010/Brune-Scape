from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import db, User, Category, Deck, Card
from app.forms import CategoryForm

category_routes = Blueprint('categories', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


# Get all Categories
@category_routes.route("/")
def all_categories():
    categories = Category.query.all()

    return {
        "categories": [category.to_dict() for category in categories]
    }


# Get Category by Id
@category_routes.route("/<int:categoryId>")
def category_by_id(categoryId):
    category = Category.query.get(categoryId)

    return category.to_dict()


# Get Categories of Curr User
@category_routes.route("/current_user")
@login_required
def categories_current_user():
    categories = Category.query.filter(current_user.id == Category.owner_id).all()

    return {
        "categories": [category.to_dict() for category in categories]
    }


# Create a Category
@category_routes.route("/new", methods=["POST"])
@login_required
def create_new_category():
    form = CategoryForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_category = Category(
            owner_id = current_user.id,
            name = form.data['name'],
            description = form.data['description']
        )
        db.session.add(new_category)
        db.session.commit()

        return new_category.to_dict()

    else:
        return {
            'errors': validation_errors_to_error_messages(form.errors)
        }, 401


# Edit a Category
@category_routes.route("/<int:categoryId>", methods=["PUT"])
@login_required
def edit_a_category(categoryId):
    form = CategoryForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    edited_category = Category.query.get_or_404(categoryId)

    if form.validate_on_submit():
        edited_category.owner_id = current_user.id
        edited_category.name = form.data['name']
        edited_category.description = form.data['description']

        db.session.commit()
        return edited_category.to_dict()
    else:
        return {
            'errors': validation_errors_to_error_messages(form.errors)
        }, 401


# Delete a Category
@category_routes.route("/<int:categoryId>", methods=["DELETE"])
@login_required
def delete_a_category(categoryId):
    category_to_delete = Category.query.get(categoryId)

    if current_user.id == category_to_delete.owner_id:
        db.session.delete(category_to_delete)
        db.session.commit()

        return {
            'message': "Successfully Deleted!"
        }
    else:
        return {
            'message': "Unauthorized User", "Status Code": 403
        }

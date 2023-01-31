from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import db, User, Category, Deck, Card
from app.forms import DeckForm, CardForm

card_routes = Blueprint('cards', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


#Get all Cards
@card_routes.route("/")
def all_cards():
    cards = Card.query.all()

    return {
        "cards": [card.to_dict() for card in cards]
    }


#Get Curr User Cards
@card_routes.route("/current_user")
@login_required
def curr_user_cards():
    cards = Card.query.filter(current_user.id == Card.owner_id).all()

    return {
        "cards": [card.to_dict() for card in cards]
    }


#Get Card by Id
@card_routes.route("/<int:cardId>")
@login_required
def get_single_card(cardId):
    card = Card.query.get_or_404(cardId)
    return card.to_dict()


# Create a Card
@card_routes.route("/new", methods=["POST"])
@login_required
def create_new_card():
    form = CardForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_card = Card(
            question = form.data["question"],
            answer = form.data["answer"],
            owner_id = current_user.id,
            deck_id = form.data["deck_id"]
        )
        db.session.add(new_card)
        db.session.commit()

        return new_card.to_dict()

    else:
        return {
            'errors': validation_errors_to_error_messages(form.errors)
        }, 401


# Update a Card
@card_routes.route("/<int:cardId>", methods=["PUT"])
@login_required
def edit_a_card(cardId):
    form = CardForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    card_to_edit = Card.query.get_or_404(cardId)

    if form.validate_on_submit():
        card_to_edit.question = form.data["question"]
        card_to_edit.answer = form.data["answer"]

        if form.data["mastery"]:
            card_to_edit.mastery = form.data["mastery"]

        db.session.commit()

        return card_to_edit.to_dict()

    else:
        return {
            'errors': validation_errors_to_error_messages(form.errors)
        }, 401


# Delete a Card
@card_routes.route("/<int:cardId>", methods=["DELETE"])
@login_required
def delete_a_card(cardId):
    card_to_delete = Card.query.get_or_404(cardId)

    if current_user.id == card_to_delete.owner_id:
        db.session.delete(card_to_delete)
        db.session.commit()

        return {
            'message': "Successfully Deleted!"
        }
    else:
        return {
            'message': "Unauthorized User", "Status Code": 403
        }

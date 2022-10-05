from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import db, User, Class, Deck, Card
from app.forms import DeckForm

deck_routes = Blueprint('decks', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


# Get all Decks
@deck_routes.route("/")
def all_decks():
    decks = Deck.query.all()

    return {
        "decks": [deck.to_dict() for deck in decks]
    }


# Get Deck by Id
@deck_routes.route("/<int:deckId>")
def deck_by_id(deckId):
    deck = Deck.query.get(deckId)

    return deck.to_dict()


# Get Decks of Curr User
@deck_routes.route("/current_user")
@login_required
def decks_current_user():
    decks = Deck.query.filter(current_user.id == Deck.owner_id).all()

    return {
        "decks": [deck.to_dict() for deck in decks]
    }


# Create Deck
@deck_routes.route("/new", methods=["POST"])
@login_required
def create_new_deck():
    form = DeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_deck = Deck(
            class_id = form.data['class_id'],
            owner_id = current_user.id,
            name = form.data['name']
        )
        db.session.add(new_deck)
        db.session.commit()

        return new_deck.to_dict()

    else:
        return {
            'errors': validation_errors_to_error_messages(form.errors)
        }, 401


# Edit a Deck
@deck_routes.route("/<int:deckId>", methods=["PUT"])
@login_required
def edit_a_deck(deckId):
    form = DeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    edited_deck = Deck.query.get_or_404(deckId)

    if form.validate_on_submit():
        edited_deck.class_id = form.data['class_id']
        edited_deck.owner_id = current_user.id
        edited_deck.name = form.data['name']

        db.session.commit()
        return edited_deck.to_dict()
    else:
        return {
            'errors': validation_errors_to_error_messages(form.errors)
        }, 401


# Delete a Deck
@deck_routes.route("/<int:deckId>", methods=["DELETE"])
@login_required
def delete_a_deck(deckId):
    deck_to_delete = Deck.query.get(deckId)

    if current_user.id == deck_to_delete.owner_id:
        db.session.delete(deck_to_delete)
        db.session.commit()

        return {
            'message': "Successfully Deleted!"
        }
    else:
        return {
            'message': "Unauthorized User", "Status Code": 403
        }

from flask import Blueprint, jsonify, session, request
from flask_login import login_required, current_user
from app.models import db, User, Class, Deck, Card
from app.forms import DeckForm

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


# #Get all Cards
# @card_routes.route("/")
# def all_cards():
#     return


# #Get all Cards Curr User
# @card_routes.route("/current_user")
# @login_required
# def curr_user_cards():
#     cards = Card.query.filter(current_user.id == Card.)

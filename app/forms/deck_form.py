from flask_wtf import FlaskForm
from wtforms import validators
from wtforms.validators import DataRequired, Length, url
from wtforms.fields import (
    BooleanField, SelectField, DateField, StringField, PasswordField, SubmitField, TextAreaField, TimeField, IntegerField
)


class DeckForm(FlaskForm):
    name = StringField("name", validators=[
        DataRequired(),
        Length(min=2, max=50, message="Deck names should be between 2 - 50 chars")
    ])
    class_id = IntegerField("class_id") #validators=[DataRequired()]

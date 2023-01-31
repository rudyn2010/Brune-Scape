from flask_wtf import FlaskForm
from wtforms import validators
from wtforms.validators import DataRequired, Length, url
from wtforms.fields import (
    BooleanField, SelectField, DateField, StringField, PasswordField, SubmitField, TextAreaField, TimeField, IntegerField
)

class CardForm(FlaskForm):
    question = StringField("question", validators=[
        DataRequired(),
        Length(min=2, max=255, message="Question must be between 1 - 255 chars")
        ])
    answer = StringField("answer", validators=[
        DataRequired(),
        Length(min=2, max=255, message="Answer must be between 1 - 255 chars")
        ])
    deck_id = IntegerField("deck_id", validators=[DataRequired()])
    mastery = IntegerField('mastery')

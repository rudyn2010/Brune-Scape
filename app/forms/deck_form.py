from flask_wtf import FlaskForm
from wtforms import validators
from wtforms.validators import DataRequired, Length, url
from wtforms.fields import (
    BooleanField, SelectField, DateField, StringField, PasswordField, SubmitField, TextAreaField, TimeField, IntegerField
)


class DeckForm(FlaskForm):
    name = StringField("name", validators=[
        DataRequired(),
        Length(min=3, max=50, message="Name must be between 1 and 50 characters")
    ])
    class_id = IntegerField("class_id", validators=[DataRequired()])

from flask_wtf import FlaskForm
from wtforms import validators
from wtforms.validators import DataRequired, Length, url
from wtforms.fields import (
    BooleanField, SelectField, DateField, StringField, PasswordField, SubmitField, TextAreaField, TimeField, IntegerField
)


class CategoryForm(FlaskForm):
    name = StringField("name", validators=[
        DataRequired(),
        Length(min=2, max=50, message="Catagory names should be between 2 - 50 chars")
    ])
    description = StringField("description", validators=[
        DataRequired(),
        Length(min=2, max=200, message="Description should be between 2 - 200 chars")
    ])

from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


class SignUpForm(FlaskForm):
    first_name = StringField('first_name', validators=[
        DataRequired(),
        Length(min=2, max=50, message="First name must be between 2 - 50 chars")
        ])
    last_name = StringField('last_name', validators=[
        DataRequired(),
        Length(min=2, max=50, message="Last name must be between 2 - 50 chars")
        ])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])

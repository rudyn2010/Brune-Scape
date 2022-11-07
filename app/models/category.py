from .db import db


class Category(db.Model):
    __tablename__ = "categories"

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(200), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    #relationships
    decks = db.relationship("Deck", back_populates="category", cascade="all, delete-orphan")
    owner = db.relationship("User", back_populates="categories")


    def to_dict(self):
        return {
            "id": self.id,
            "owner_id": self.owner_id,
            "name": self.name,
            "description": self.description,
            "decks": [deck.id for deck in self.decks]
        }

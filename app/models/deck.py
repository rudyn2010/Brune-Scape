from .db import db


class Deck(db.Model):
    __tablename__ = "decks"

    id = db.Column(db.Integer, primary_key=True)
    category_id = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False) #nullable=False
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    name = db.Column(db.String(50), nullable=False)

    #relationships
    category = db.relationship("Category", back_populates="decks")
    cards = db.relationship("Card", back_populates="deck", cascade="all, delete-orphan")
    owner = db.relationship("User", back_populates="decks")


    def to_dict(self):
        return {
            "id": self.id,
            "class_id": self.class_id,
            "owner_id": self.owner_id,
            "name": self.name,
            "cards": [card.id for card in self.cards]
        }

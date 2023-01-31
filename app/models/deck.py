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

    def get_deck_mastery(self):
        if len(self.cards) == 0:
            return 0
        else:
            mastery = sum([card.mastery for card in self.cards]) / (len(self.cards) * 5)
            return round(mastery * 100)

    def to_dict(self):
        return {
            "id": self.id,
            "category_id": self.category_id,
            "owner_id": self.owner_id,
            "name": self.name,
            "cards": [card.id for card in self.cards],
            "mastery": self.get_deck_mastery()
        }

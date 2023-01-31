from .db import db

class Card(db.Model):
    __tablename__ = "cards"

    id = db.Column(db.Integer, primary_key=True)
    deck_id = db.Column(db.Integer, db.ForeignKey("decks.id"), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    question = db.Column(db.String(255), nullable=False)
    answer = db.Column(db.String(255), nullable=False)
    mastery = db.Column(db.Integer, nullable=True, default = 0)

    #relationships
    deck = db.relationship("Deck", back_populates="cards")
    owner = db.relationship("User", back_populates="cards")

    def to_dict(self):
        return {
            "id": self.id,
            "deck_id": self.deck_id,
            "owner_id": self.owner_id,
            "question": self.question,
            "answer": self.answer,
            "mastery": self.mastery
        }

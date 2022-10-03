from .db import db


class Card(db.Model):
    __tablename__ = "cards"

    id = db.Column(db.Integer, primary_key=True)
    deck_id = db.Column(db.Integer, db.ForeignKey("decks.id"), nullable=False)

    question = db.Column(db.String(255), nullable=False)
    answer = db.Column(db.String(255), nullable=False)

    #relationships
    deck = db.relationship("Deck", back_populates="cards")

    def to_dict(self):
        return {
            "id": self.id,
            "deck_id": self.deck_id,
            "question": self.question,
            "answer": self.answer,
        }

from .db import db


class Class(db.Model):
    __tablename__ = "classes"

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(50), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    #relationships
    decks = db.relationship("Deck", back_populates="class_for_deck", cascade="all, delete-orphan")
    owner = db.relationship("User", back_populates="classes")


    def to_dict(self):
        return {
            "id": self.id,
            "owner_id": self.owner_id,
            "name": self.name,
            "decks": [deck.id for deck in self.decks]
        }

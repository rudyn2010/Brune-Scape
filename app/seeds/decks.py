from app.models import db, Deck


# Adds a demo user, you can add other users here if you want
def seed_decks():
    deck1 = Deck(
        class_id=1,
        owner_id=1,
        name='Slayer',
        )
    deck2 = Deck(
        class_id=1,
        owner_id=1,
        name='Quests'
        )
    deck3 = Deck(
        class_id=2,
        owner_id=1,
        name='General',
        )


    db.session.add(deck1)
    db.session.add(deck2)
    db.session.add(deck3)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_decks():
    db.session.execute('TRUNCATE decks RESTART IDENTITY CASCADE;')
    db.session.commit()

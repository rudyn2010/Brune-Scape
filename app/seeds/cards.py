from app.models import db, Card


# Adds a demo user, you can add other users here if you want
def seed_cards():
    card1 = Card(
        deck_id = 1,
        question = "What particular slayer equipment do you need to wear while killing a Smoke Devil?",
        answer = "A face mask!"
        )
    card2 = Card(
        deck_id = 1,
        question = "Who drops dragon boots?",
        answer = "Spiritual Mages!"
        )
    card3 = Card(
        deck_id = 1,
        question = "What are the 9 different Slayer Masters?",
        answer = "Turael, Spria, Krystilia, Mazchna, Vannaka, Chaeldar, Konar, Nieve, Duradel"
        )
    card4 = Card(
        deck_id = 2,
        question = "Which quest unlocks the Dragon Scimitar?",
        answer = "Monkey Madness"
        )
    card5 = Card(
        deck_id = 2,
        question = "Which quest unlocks the Rune Platebody?",
        answer = "Dragon Slayer"
        )
    card6 = Card(
        deck_id = 3,
        question = "What does the G.E. stand for?",
        answer = "Grand Exchange"
        )
    card7 = Card(
        deck_id = 3,
        question = "What are the 3 combat styles?",
        answer = "Range, Melee, Magic"
        )
    card8 = Card(
        deck_id = 3,
        question = "What is the cost of membership?",
        answer = "11 dollars"
        )
    card9 = Card(
        deck_id = 3,
        question = "Which company makes RuneScape?",
        answer = "Jagex"
        )


    db.session.add(card1)
    db.session.add(card2)
    db.session.add(card3)
    db.session.add(card4)
    db.session.add(card5)
    db.session.add(card6)
    db.session.add(card7)
    db.session.add(card8)
    db.session.add(card9)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_cards():
    db.session.execute('TRUNCATE cards RESTART IDENTITY CASCADE;')
    db.session.commit()

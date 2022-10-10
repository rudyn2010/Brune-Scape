# Welcome to BruneScape!

## BruneScape is project clone that I made of BrainScape.

Brune-Scape, a study application for RuneScape, is a website for users to create classes and flash-cards organized in decks to help aid them in their adventures around Gielinor. Create flash-cards about anything you want Runescape related to help aid you in the future as you do quests and minigames that require memorization and knowledge of the game! This application was inspired by BrainScape, with a theme derived from the Old School RuneScape website!

[BruneScape Live Site](https://brunescape.herokuapp.com/)

## Project Wiki Links:

[API Routes](https://github.com/rudyn2010/Brune-Scape/wiki/API-ROUTES)

[DB Schema](https://github.com/rudyn2010/Brune-Scape/wiki/DB-SCHEMA)

[Features List](https://github.com/rudyn2010/Brune-Scape/wiki/MVP-FEATURES-LIST)

[User Stories](https://github.com/rudyn2010/Brune-Scape/wiki/USER-STORIES)

[Wireframes](https://github.com/rudyn2010/Brune-Scape/wiki/Wireframes)


## Tech Stack:

### Languages, Frameworks, Platforms, and Libraries:

Frontend:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

Backend:

![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) ![SQLAlchemy](https://img.shields.io/badge/-SQLAlchemy-red?style=for-the-badge)


Hosted On:

![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## How to Run Locally:

1. Clone the github repository to a file location of your choice, recommend using "Download ZIP" in the Code dropdown menu for this repository.

2. Run **npm i && npm i -D** in the Backend to install the appropriate Backend dependencies:

```
npm i && npm i -D
```

3. Create a .env file in the Backend folder and copy the contents below. Replace the **insert secret key here** with your **own** very secret key!

```
SECRET_KEY= <<INSERT_SECRET_KEY_HERE>>
DATABASE_URL=sqlite:///dev.db
```

4. In the backend folder to initialize the database and run it in a virtual environment, first execute the command:
**pipenv shell**. Then migrate / seed database and run the Flask application after succesfully seeding with the following commands:

```
pipenv shell
pipenv run flask db init
pipenv run flask db migrate
pipenv run flask db upgrade
pipenv run flask run
```

5. Navigate to the Frontend folder and run **npm i && npm i -D** to install the appropriate Frontend dependencies:

```
npm i && npm i -D
```

6. Run **npm start** in the Frontend folder:

```
npm start
```

7. You should now be able to see the web application in your browser when you navigate to localhost:**port number** (Your preferred port number)!

## Features Directory:

### Create and Register a New User

<img width="927" alt="Screen Shot 2022-10-09 at 6 15 37 PM" src="https://user-images.githubusercontent.com/14317966/194788306-d0d3ac9b-76aa-4066-b419-16628435158a.png">

### Login Valid User or User Demo Login Page

<img width="712" alt="Screen Shot 2022-10-09 at 6 16 28 PM" src="https://user-images.githubusercontent.com/14317966/194788348-f27a94eb-f16a-4847-bb3a-e5ad06be2554.png">

### Splash Page

<img width="1790" alt="Screen Shot 2022-10-09 at 6 14 22 PM" src="https://user-images.githubusercontent.com/14317966/194788268-bd209829-5312-49ae-b330-1f5b7489137e.png">

### Users Decks Page

<img width="1463" alt="Screen Shot 2022-10-09 at 6 17 25 PM" src="https://user-images.githubusercontent.com/14317966/194788392-b71db9dc-ecc8-4881-ae15-d3ccc72172b5.png">

### Uses Cards Page

<img width="1244" alt="Screen Shot 2022-10-09 at 6 18 19 PM" src="https://user-images.githubusercontent.com/14317966/194788433-ccfce1a3-677e-4f0c-abfc-01c35e749acd.png">


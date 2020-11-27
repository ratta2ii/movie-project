# Movie Ratings App

### (Responsive & Mobile Design Coming Soon)

Live Demo: [Movie Ratings App Live](https://ratta2ii.github.io/movie-ratings-app/#/)

Git Repo: [github.com/ratta2ii/movie-ratings-app](https://github.com/ratta2ii/movie-ratings-app)

<center>

![Image of Paths](public/ReadmeImages/screenshot-1.png)

![Image of Paths](public/ReadmeImages/screenshot-2.png)

![Image of Paths](public/ReadmeImages/screenshot-4.png)

</center>


# Project Description

_Movie Ratings App is a client-side application that uses a Firebase database with client-side querying. The application is built using HTML, JavaScript with the React library, and Material UI and CSS for design._

_The application also uses an API (omdbapi.com) to retrieve a list of movies according to different search specifications. This particular application makes requests using a title name (inputted by the user) in the first API call, and then targets the ID of a single movie (selected by the user from the first response) in order to make another request for additional details at a second endpoint._ 
 
 _I also implemented both upvote and downvote functionality for each movie selected by the user. Each time a movie is selected by the user, a database is queried in order to retrieve any upvotes and downvotes that may have been previously stored in the database for any given movie. If a movie has yet to be entered into the database, the number of votes will default to 0. The user is confined to one vote per movie; however, a user can deselect their current selection and then cast a new vote. Please note that the single vote per movie restrictions only work as long as a user remains on that page (since the application does not implement any type of authentication). Once the user has cast a vote (or deselected a previous vote), the users vote is then stored in a database under the currently selected movies ID._

 _I also chose to use several additional technologies that I felt would be more in line with industry standards for a larger application. For example, instead of just drilling props to child components to handle the application state (arguably, maybe a better solution for an application of this size), I instead opted to use Redux for global state management. I also used multiple reducers in conjunction with a root reducer, action creators, constants, added middleware and a middleware logger, and structured the application in a way that would be more easily scalable for additional functionality._


# Setup

#### View live demo at [Movie Ratings App](https://ratta2ii.github.io/movie-ratings-app/#/) or follow the setup instructions below.

#### (Application Start Up Instructions)
    
    STEP #1:

    IMPORTANT:  YOU WILL NEED MY API KEYS IN ORDER TO PROCEED.
                (You may also view live demo linked above.)

    1. git clone https://github.com/ratta2ii/movie-ratings-app.git  

    2. cd movie-ratings-app

    3. touch .env (Create an .env file in the root directory)

    4. Paste both variables below into the newly created .env file 
            REACT_APP_OMDBAPI_API_KEY=<apiKeyHere>
            REACT_APP_FIREBASE_API_KEY=<apiKeyHere>

    5. In .env, replace the values (EX: <apiKeyHere>) with the corresponding keys.

    6. npm run start


# Technologies Used

| Languages | Frameworks | Cloud | Other |
| ------ | ------ | ------ | ----- | 
| `JavaScript` | `React (library)`| `Firebase Database` | `Redux` |
| `HTML` | `Material UI` | `GitHub` | `omdbapi API` |
| `CSS` |  |  |   |


<!-- 
# Setup-2 (Follow if you DO NOT have API keys)
    
#### (Application Start Up Instructions)
    
    STEP #1:

    IMPORTANT: In order for the API, database and application to all work correctly, you will have to follow all 3 steps.

    1. Clone repo (https://github.com/ratta2ii/movie-ratings-app.git) 

    2. cd movie-ratings-app

    3. npm install

    4. Follow through with steps #2 and #3 before continuing 

    5. npm run start

#### (Obtain API Key Instructions)

    STEP #2:

    1. Go to (omdbapi.com) and obtain an API Key

    2. Create an .env file inside the root directory of the movie-ratings-app

    3. Add this exact variable to the .env file: REACT_APP_OMDBAPI_KEY=<yourApiKeyHere>

#### (Firebase Database Setup Instructions)

    STEP #3:

    1. Follow Firebase quickstart guide to setup a database (https://firebase.google.com/docs/firestore/quickstart)

    2. Once you create database, take your firebase configurations and replace it with the code in (src/FirebaseDB/config.js)

    3. Store firebase API key (from config file) and store in the .env file with this exact variable: REACT_APP_FIREBASE_API_KEY=<yourApiKeyHere>
 -->

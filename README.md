# Movie Ratings App

Live: [Movie Ratings App Live](https://ratta2ii.github.io/movie-ratings-app/#/)

Repo: [github.com/ratta2ii/movie-ratings-app](https://github.com/ratta2ii/movie-ratings-app)

<center>

![Image of Paths](public/ReadmeImages/screenshot-1.png)

![Image of Paths](public/ReadmeImages/screenshot-2.png)

![Image of Paths](public/ReadmeImages/screenshot-4.png)

</center>


# Project Description

_Movie Ratings App is a client-side application that uses a Firebase database for client-side queries. The application is built using HTML, JavaScript with the React library, and Material UI and CSS for design._

 _The application also takes advantage of an API (omdbapi.com), which retrieves a list of movies according to different search specifications. This particular application searches for movies using the title name for one request, and by targeting the selected movies ID to make an additional request at a second endpoint._ 
 
 _I also implemented both upvote and downvote functionality for each of the selected movies. This allows each user to add their own rating. The user can choose only one rating per session (since there is no authentication), however, a user can deselect their current vote and vote again. Votes are then stored in a database and saved in accordance with their ID. Each time a movie is selected, the database is queried in order to retrieve any previous upvotes and downvotes that may be previously stored in the database._

 _I also chose to use several additional technologies that would be more in line with industry standards for a larger application. For example, since it is a relatively small application, I could have just drilled props to child components, but instead chose to use Redux for global state management. I also used a couple different reducers along with a root reducer, action creators, action types, constants, added middleware and a middleware logger, and structured the application in a way that would be more easily scalable for additional functionality._


# Setup

#### View at [Movie Night App Live](https://ratta2ii.github.io/movie-ratings-app/#/) or follow the setup instructions below.

#### (Application Start Up Instructions)
    
    STEP #1:

    IMPORTANT: In order for the API, database and application to all work correctly, you will have to follow all 3 steps.

    1. Clone repo (https://github.com/ratta2ii/movie-ratings-app.git) 

    2. cd movie-ratings-app

    3. npm install

    4. Follow through with steps #2 and #3

#### (Obtain API Key Instructions)

    STEP #2:

    1. Go to omdbapi.com and obtain an API Key

    2. Create an .env file inside the root directory of the movie-ratings-app

    3. Add this exact variable to the .env file: REACT_APP_OMDBAPI_KEY=<your api key here>

#### (Firebase Database Setup Instructions)

    STEP #3:

    1. Follow Firebase quickstart guide to setup a database (https://firebase.google.com/docs/firestore/quickstart)

    2. Once you create database, take your firebase configurations and replace it with the code in (src/FirebaseDB/config.js)

    3. Store firebase API key (from config file) and store in the .env file with this exact variable: REACT_APP_FIREBASE_API_KEY=<your api key here>


# Technologies Used

| Languages | Frameworks | Cloud | Styling | Other |
| ------ | ------ | ------ | ----- | ----- |
| `JavaScript` | `React (library)`| `Firebase` | `Material UI` | `Redux` |
| `HTML` |  |  |  |  |
| `CSS` |  |  | |  |
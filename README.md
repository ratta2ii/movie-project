# Movie Ratings App
Live: [Movie Ratings App Live](https://ratta2ii.github.io/movie-ratings-app/#/)

Repo: [github.com/ratta2ii/movie-ratings-app](https://github.com/ratta2ii/movie-ratings-app)




<center>

![Image of Paths](public/ReadmeImages/screenshot-1.png)

![Image of Paths](public/ReadmeImages/screenshot-2.png)

![Image of Paths](public/ReadmeImages/screenshot-4.png)

</center>

# Project Description

_Movie Ratings App is a client-side application that uses a Firebase database for client-side queries. The application is built using JavaScript with the React library, and Material UI for design._

 _The application also takes advantage of an API (omdbapi.com), allowing a user to search for movies according to different specifications. This particular application searches for movies by title name for the first request, and by ID at an additional endpoint for the second request. When the API first returns a list of movies, a user can then select a single movie, at which point the selected movies ID is targeted and used to make the second request to retrieve all of the details for that specific movie._ 
 
 _I also implemented both upvote and downvote functionality for each selected movie, which allows each user to add their own rating. A user can choose only one rating per session (since there is no authentication), however, a user can deselect their current vote and vote again. Votes are then stored in a database and saved in accordance with their ID. Each time a movie is selected, the database is queried in order to retrieve any previous upvotes and downvotes._

 _I also chose to use several additional technologies to build an application that would be both scalable and what I believe would be more in line with a larger application. For example, instead of drilling props to child components, since it is a relatively small application, I chose to use Redux for global state management as a way to demonstrate additional skills. For this same reason, I also chose to a couple different reducers along with a root reducer. I also used action creators, action types, constants, added middleware and a middleware logger, and structured the application in a way that would be easily scalable for additional functionality._

# Setup
#### View at [Movie Night App Live](https://ratta2ii.github.io/movie-ratings-app/#/) or follow the setup instructions below. (Note: If you choose to clone the repo, you will need to get an api key first from )

#### (Application Start Up Instructions)
    
    STEP #1:

    IMPORTANT: In order for the API's and the database to work, you will have to follow all 3 steps.

    1. Clone repo (https://github.com/ratta2ii/movie-ratings-app.git) 

    2. cd movie-ratings-app

    3. npm install

    4. Follow through with steps #2 and #3

#### OMDBAPI API KEY INSTRUCTIONS:

    STEP #2:

    1. Go to omdbapi.com and obtain an API Key

    2. Create an .env file inside the root directory of the movie-ratings-app

    3. Add this exact variable to the .env file: REACT_APP_OMDBAPI_KEY=<your api key here>

### FIREBASE DATABASE INSTRUCTIONS:

    STEP #3:

    1. Follow Firebase quickstart guide to setup a database (https://firebase.google.com/docs/firestore/quickstart)

    2. Once you create database, take your configuration files and add to (src/FirebaseDB/config.js)

    3. Remove your API Key and store in the .env file with this exact variable: REACT_APP_FIREBASE_API_KEY=<your api key here>

# Technologies Used

| Languages | Frameworks | Cloud | Styling | Other |
| ------ | ------ | ------ | ----- | ----- |
| `JavaScript` | `React (library)`| `Firebase` | `Material UI` | `Redux` |
| `HTML` |  |  |  |  |
| `CSS` |  |  | |  |
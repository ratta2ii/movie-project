import db from './db';


var moviesRef = db.collection("movies");

export const addVoteToDb = (movieEntry) => {
    moviesRef.doc(movieEntry.imdbID).set(movieEntry);  
}

//? Bring query from movieInfo into this module (???)
// export const retrieveVotes = (id) => {
// }
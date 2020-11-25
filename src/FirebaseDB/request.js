import db from './db';


var moviesRef = db.collection("movies");

export const addVoteToDb = (movieEntry) => {
    moviesRef.doc(movieEntry.imdbID).set(movieEntry);  
}

//? Bring query in movieInfo into this module (???)
// export const retrieveVotes = (id) => {
//             var moviesRef = db.collection("movies");
//         var query = moviesRef.where("imdbID", "==", movieInfo.imdbID);
//         query.get().then(function (querySnapshot) {
//             let data;
//             querySnapshot.forEach(function (doc) {
//                 console.log(doc.id, ' => ', doc.data());
//                 data = doc.data();
//                 if ("upVotes" in data) {
//                     setCurrentVotes(data);
//                 } else {
//                     setCurrentVotes({
//                         upVotes: 0,
//                         downVotes: 0,
//                     })
//                 }
//             })
//         })
//             .catch(error => {
//                 console.log(error.message);
//             })
// }


















function request(vote) {
    // db.collection("movies").add(vote)
    //     .then(function (docRef) {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch(function (error) {
    //         console.error("Error adding document: ", error);
    // });
    // return false;





    // var moviesRef = db.collection("movies");

    // // moviesRef.doc("Spider Man").set({
    // //     upVotes: 1 + 1,
    // //     downVotes: 17,
    // //     imdbID: 'tt0456165'
    // // });

    // var query = moviesRef.where("imdbID", "==", "tt0456165");

    // query.get().then(function (querySnapshot) {
    //     querySnapshot.forEach(function (doc) {
    //         console.log(doc.id, ' => ', doc.data());
    //     });
    // });
    





    // var citiesRef = db.collection("cities");

    // citiesRef.doc("SF").set({
    //     name: "San Francisco", state: "CA", country: "USA",
    //     capital: false, population: 1000,
    //     regions: ["west_coast", "norcal"] });

// citiesRef.doc("SF").set({
//     name: "San Francisco", state: "CA", country: "USA",
//     capital: false, population: 860000,
//     regions: ["west_coast", "norcal"] });
// citiesRef.doc("LA").set({
//     name: "Los Angeles", state: "CA", country: "USA",
//     capital: false, population: 3900000,
//     regions: ["west_coast", "socal"] });
// citiesRef.doc("DC").set({
//     name: "Washington, D.C.", state: null, country: "USA",
//     capital: true, population: 680000,
//     regions: ["east_coast"] });
// citiesRef.doc("TOK").set({
//     name: "Tokyo", state: null, country: "Japan",
//     capital: true, population: 9000000,
//     regions: ["kanto", "honshu"] });
// citiesRef.doc("BJ").set({
//     name: "Beijing", state: null, country: "China",
//     capital: true, population: 21500000,
//     regions: ["jingjinji", "hebei"] });
}





// db.collection("users").add({
//     first: "Alan",
//     middle: "Mathison",
//     last: "Turing",
//     born: 1912
// })
// .then(function(docRef) {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//     console.error("Error adding document: ", error);
// });
// db.collection("users").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         console.log(`${doc.id} => ${doc.data()}`);
//     });
// });
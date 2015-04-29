var request = require('request');
var colors = require('colors');
var localhost  = "http://localhost:3000"
var remotehost = ""; 
var host = localhost;

function callback(error, response, body) {
  if (!error  && response.statusCode == 200) {
    console.log("BODY:".blue, JSON.parse(body).text);
  } else {
    console.log("ERROR:".red, error);
  }
  console.log();
}

// /** Create a user */
// var testUser = {
// 	email:"donttestmeeveragin@mailinator.com",
// 	password:"testpass",
// 	phoneNumber:"1334217850",
// 	firstName:"Untestinger",
// 	lastName:"User",
//   profileImageURL:"http://localhop.com/images/user/default-profile.jpg"};
// //request.post(host+"/add/user", callback).form(testUser);

// var kendal = {
//   password: "fakepass",
//   phoneNumber: "19132540937"
// };

/** Get a user's location */
var userID = 2;
request.get(host+"/user/location/"+userID, callback);

/** Get a user's events */
//var eventid = 2;
//var status = 1;
//request.get(host+"/event/users/"+eventid+"/"+status, callback);


// // Get a user's events
// var userid = 1;
// request.get(host+"/user/events/"+userid, callback);

// // Get a user's favorited events
// request.get(host+"/get/user/event/favorites/"+userid, callback);

// // Get a user using their phone number
// var phoneNumber = "19132540937";
// request.get(host+"/get/user/by/phonenumber/"+phoneNumber, callback);
/*
request.post(host+"/user/location/", callback).form({
  userId: 1,
  latitude: "40.689060",
  longitude: "-74.044636"
});
*/


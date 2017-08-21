// // Lesson 4
//
// function placeAnOrder(orderNumber) {
//
//     console.log("Customer order:", orderNumber);
//
//     cookAndDeliverFood(function() {
//         console.log("Delivered food order:", orderNumber);
//     });
// }
//
// // Simulate a 5 second operation
// function cookAndDeliverFood(callback) {
//     setTimeout(callback, 5000);
// }
//
//
// // Simulate users web request
// for (var i = 1; i <= 6; i++) {
//     placeAnOrder(i);
// }

// // Lesson 5
//
// var Bucky = {
//     favFood: "bacon",
//     favMovies: "Chappie"
// };
//
// var Person = Bucky;
// Person.favFood = "salad";
//
// console.log(Bucky.favFood);
//
// console.log(19 == "19"); // compares only values (equal sign)
// console.log(19 === "19"); // compares values and types (identical sign)

// // Lesson 7
//
// var Bucky = {
//         printFirstName: function() {
//             console.log("My name is Bucky");
//             console.log(this === Bucky);
//         }
// };
//
// Bucky.printFirstName();
//
// // The default calling context is global
// function worthless() {
//     console.log("I am worthless");
//     console.log(this === global);
// }
// worthless();

// // Lesson 8
//
// function User() {
//     this.name = "";
//     this.life = 100;
//     this.giveLife = function giveLife(targetPlayer) {
//         targetPlayer.life += 1;
//         console.log(this.name + " gave 1 life to " + targetPlayer.name);
//     };
// }
//
// var Bucky = new User();
// var Wendy = new User();
// Bucky.name = "Bucky";
// Wendy.name = "Wendy";
//
// Bucky.giveLife(Wendy);
// console.log("Bucky has " + Bucky.life + " lifepoints");
// console.log("Wendy has " + Wendy.life + " lifepoints");
//
// // You can add functions to objects
// User.prototype.uppercut = function uppercut(targetPlayer) {
//     targetPlayer.life -= 3;
//     console.log(this.name + " just uppercutted " + targetPlayer.name);
// };
//
// Wendy.uppercut(Bucky);
// console.log("Bucky has " + Bucky.life + " lifepoints");
// console.log("Wendy has " + Wendy.life + " lifepoints");
//
// // You can add properties to objects
// User.prototype.magic = 60;
//
// console.log(Bucky.magic);
// console.log(Wendy.magic);

// // Lesson 8 and 9
//
// var movies = require("./movies");
// movies.printAvatar();
// movies.printChappie();
// console.log(movies.favMovie);

// // Lesson 10 and 11
//
// require("./emily");
// require("./bucky");

// // Lesson 12
//
// var fs = require("fs");
// fs.writeFileSync("corn.txt", "Corn is good, corn is live");
// console.log(fs.readFileSync("corn.txt").toString());
//
// console.log("------------------------");
// var path = require("path");
// var websiteHome = "Desktop/Bucky//thenewboston/index.html";
// var websiteAbout = "Desktop/Bucky/thenewboston/about.html";
//
// console.log(path.normalize(websiteHome));
// console.log(path.dirname(websiteAbout));
// console.log(path.basename(websiteAbout));
// console.log(path.extname(websiteAbout));
//
// console.log("----------------------------");
// // setInterval(function () {
// //     console.log("beef");
// // }, 2000);
//
// console.log("-------------------------");
// console.log(__dirname);
// console.log(__filename);

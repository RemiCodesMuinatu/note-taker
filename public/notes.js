//Rest-CRUD API
Iconst express = require('express');
const path = require('path');
const writeFile = require('writeFile');
const readFile = require('readFile');
const app = express();
//create server.js
//input middleware function to parse json data for every request and response
//
app.get('/', function(req, res) {
    res.send('hello world');
});



//JAVASCRIPT Function for Note Taker
//create an eventListener for the Get Started Button that creates a placeholder to write the notes so that it can be displayed on the screen

//connect note.html page to the event listener

//create a loop function that places notes in the div in note.html to input the notes

//when save button is pressed, saves information into the JSON object

//function on the edit button that allows you to edit the persistent saved notes

//function to delete notes

//deploy application onto heroku




app.listen(8080);
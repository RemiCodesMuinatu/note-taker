//Rest-CRUD API
const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
//create server.js
//input middleware function to parse json data for every request and response
//
app.use(express.json()); 
app.use(express.urlencoded()); //Parse URL-encoded bodies
var db = {};
app.get('/', function(req, res) {
    res.send('hello world');
});
app.post("/", function(req, res) {
    console.log(req.body)
    res.send("hello world");
});



app.get("/getdata", function(req, res) {

    const rawdata = fs.readFileSync("data.json");
    const data = JSON.parse(rawdata);
    console.log(data);
    console.log(rawdata);
    res.json(data);
});
app.post("/adddata", function(req, res) {
    const rawdata = fs.readFileSync("data.json"); //call our data
    const data = JSON.parse(rawdata); //parse it into something we can use
    newData = {...data, ...req.body }; //combination of the old data and the new information gieven through the post request
    const jsonString = JSON.stringify(newData); //turn it back into a json string  in order to save it
    fs.writeFileSync("data.json", jsonString); //saving it

    console.log(newData);
    res.json(newData);
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
app.listen(8080);
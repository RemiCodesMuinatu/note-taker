//Imports of Libraries
const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

//middleware
app.use(express.json());

app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use("/public", express.static(path.join(__dirname, "public")));

//making data object in order for the server to have data to use for requests
var db = {};

//Routes
app.get("/", function(req, res) {
    res.sendFile("index.html", { root: path.join(__dirname, "/public") });
    // res.sendFile('./public/index.html');
});
app.get("/notes", function(req, res) {
    res.sendFile("notes.html", { root: path.join(__dirname, "/public") });
    // res.sendFile('./public/index.html');
});

//Route for getting notes
app.get("/api/notes", function(req, res) {
    const rawdata = fs.readFileSync("./db/db.json");
    const data = JSON.parse(rawdata);
    console.log(data);
    console.log(rawdata);
    res.json(data.data);
});

//Route to save notes of data
app.post("/api/notes", function(req, res) {
    console.log(req.body);
    const rawdata = fs.readFileSync("./db/db.json"); //call our data
    var data = JSON.parse(rawdata); //parse it into something we can use
    //var newData = //combination of the old data and the new information gieven through the post request
    // const jsonString = JSON.stringify(newData); //turn it back into a json string  in order to save it
    // fs.writeFileSync("./db/db.json", jsonString); //saving it

    // console.log(newData);
    // res.json(newData);
});

//JAVASCRIPT Function for Note Taker
//create an eventListener for the Get Started Button that creates a placeholder to write the notes so that it can be displayed on the screen

//connect note.html page to the event listener

//create a loop function that places notes in the div in note.html to input the notes

//when save button is pressed, saves information into the JSON object

//function on the edit button that allows you to edit the persistent saved notes

//function to delete notes

//deploy application onto heroku

app.listen(8888);
const discord = require ('discord.js');
const fs = require (`fs`);
const snek = require('snekfetch');
const Jimp = require(`jimp`);
const meme = require('memejs');
const gifSearch = require("gif-search");
const ms = require (`ms`);
const planets = require('planet-facts');
var client = new discord.Client(); 
const api = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
let xp = require("./xp.json");
let orientation = JSON.parse(fs.readFileSync("./orientation.json", "utf8"));
let gender = JSON.parse(fs.readFileSync("./gender.json", "utf8"));
const token = process.env.token;
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

client.on ("ready", () => {
    console.log ("Colonial smells")
    client.user.setActivity ("Colossal is under maintenance!")
    client.user.setUsername("Colossal")
    client.user.setAvatar(`https://i.imgur.com/SzFq1GX.jpg`)
    

    answered = true;
    cAnswer = "";
    userAnswer = "";
    answered2 = true;
    answered3 = true;
    userResponse = ""; 
    nameAnswer = "";
    userResponse2 = ""; 
    cAnswer = "";
    
    
});
client.login (token);

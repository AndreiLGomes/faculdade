const express = require("express");
const app = express();

app.listen(3080,() =>{
    console.log("Servidor rodando!");
})

app.get("/", (rep, res) =>{
    res.json(games);
})

let games = [
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "dota 2", studio: "valve", price: 0},
    {title: "portal 2", studio: "valve", price: 30},
    {title: "diablo 4", studio: "Blizzard", price: 490},
    {title: "diablo 3", studio: "Blizzard", price: 290},
    {title: "diablo 2", studio: "Blizzard", price: 90},
    {title: "hearthstone", studio: "Blizzard", price: 0},
    {title: "Star Craft 2", studio: "Blizzard", price: 200},
    {title: "Over", studio: "Blizzard", price: 20},
    {title: "Age of mythology", studio: "Microsoft", price: 500},
    {title: "age of impires 4", studio: "Microsoft", price: 300},
]

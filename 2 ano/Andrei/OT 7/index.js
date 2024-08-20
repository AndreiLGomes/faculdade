const express = require("express");
const app = express();
app.use(express.json());

app.listen(3080,() =>{
    console.log("Servidor rodando!");
})

app.get("/", (req, res) =>{
    res.json(games);
})



app.post("/novogame", (req,res) =>{
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = { title, studio, price}
    //para enviar estes dados para o array agora utilizamos o método push do js
    games.push(newGame);
    res.send("OK");   
});

app.put('/novogame/:index', (req, res) =>{
    const{index} = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    games[index] = { title, studio, price};

    return res.json(games);
})
app.delete("/:index", (req, res) => {
    const {index} = req.params;
    games.splice(index, 1);
    return res.json({ message: "0 Jogo foi deletado "});
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


import games from './jogos.js';
import express from 'express';

const app = express();



const buscarPorJogo = (nomeJogo) => {
    return games.filter(jogo => 
        jogo.title.toLowerCase().includes(nomeJogo.toLowerCase()));
};

app.get('/jogos', (req, res) =>{
    const nomeJogo = req.query.busca;
    const resultado = nomeJogo ? buscarPorJogo(nomeJogo) : games;
    if(resultado.length > 0){
        res.json(resultado);
    }else{
        res.status(404).send({"erro": "Nenhum jogo encontrada"})
    }
})

app.get('/jogos',(req, res)=>{
    const nomeJogo = req.query.busca;
    const jogosFiltrados = games.filter(jogo => jogo.title.includes(nomeJogo));
    const resultado = nomeJogo ? jogosFiltrados : games
    res.json(games)
})

app.get('/jogo/:idjogo', (req, res)=>{
    const idJogo = parseInt(req.params.idjogo);
    let mensagemErro = '';
    let jogo;

    if(!(isNaN(idJogo))){
        jogo = games.find(u => u.id === idJogo);
        if(!jogo){
            mensagemErro = "Jogo não encontrado";
        }
    }else{
        mensagemErro = "requisição inválida";
    }

    if(jogo){
        res.json(jogo);
    }else{
        res.status(404).send({"erro": mensagemErro});
    }
})


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



const express = require('express');
const app = express();
app.use(express.json()); //adicionar
app.listen(2000, () => {
    console.log('http://localhost:2000');
});
let carros = [
   
];

let tasks = ['Passear com o dog', 'Ir ao mercado', 'Comprar']
// ver
app.get("/", (req, res) => {
    res.json(carros);
})
// adicionar
// {
//     "marca": "audi",
//     "ano": 2026,
//     "nome": "AA26"
//   }precisa botar no thunder!
app.post("/novo", (req, res) => {
   let marca = req.body.marca;
   let ano = req.body.ano;
   let nome = req.body.nome;
   let teste = req.body.teste;
    console.log(marca);
    console.log(ano);
    console.log(nome);
    let novoCarro = {marca, ano, nome, teste}
    if (!marca || !ano || !nome || typeof teste !== 'boolean') {
        return res.status(400).json({ message: "Todos os campos são obrigatórios e 'disponivel' deve ser booleano." });
    }

    carros.push(novoCarro)
    res.send("ok");
});
//editar
app.put('/novo/:index', (req, res) =>{
    const { index } = req.params;
    let marca = req.body.marca;
    let ano = req.body.ano;
    let nome = req.body.nome;
    carros[index] = {marca, ano, nome};
    return res.json(carros);
})
// deletar
app.delete("/:index", (req, res) =>{
    const {index} = req.params;
    carros.splice(index,1);
    return res.json({Message:"O carro foi deletado"})
})


app.use(express.urlencoded({ extended: true })); 


app.get('/c/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
});

app.delete('/c/de/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null; //deletar item
    return res.json(carros[id]);
});



//1:npm init -y
//2:npm install express
//3:const express = require('express');
// const app = express();
// app.listen(3000, () => {
//     console.log('http://localhost:3000');
// });
import Express from 'express';
const app = Express();

app.listen(3000, () =>
    console.log('Servidor iniciado na porta 3000'));

app.get('/', (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Rota '/'")
);

app.get('/users/:name', (req, res) =>
    res.send('Usuário'+ req.params.name));



var carros = ['fiesta', 'saveiro'];
app.use(Express.urlencoded({ extended: true }));

app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
});

app.post('/cars/', (req, res) =>{
let name = req.body.name;
carros [(carros.length)] = name;
return res.json([carros[(carros.length - 1)]]);
});


app.get('/sobre', (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Vamos aprender a utilizar Rotas com Express")
);

app.put('/cars/update/:id', (rep, res)=>{
    let name = rep.body.name;
    carros[rep.params.id] = name;
    return res.json(carros[rep.params.id]);
});

app.delete('/cars/delete/:id', (rep, res)=>{
    let id = rep.params.id;
    carros[id] = null;//deletar
    return res.json(carros[id]);
});








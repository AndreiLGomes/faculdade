import express from 'express';

const app = express();

app.listen(3000, () =>
    console.log("Servidor iniciado na porta 3000")
);

app.get('/', (rep, res) =>
    res.send('<h1 style="color: blue"> CRIANDO UM SERVIDOR COM EXPRESS.JS</h1>')
);

app.get('/sobre', (rep, res) =>
    res.send('<h1 style="color: blue"> sobre</h1>')
);
app.get('/contato', (rep, res) =>
    res.send('<h1 style="color: blue"> contato</h1>')
);
app.get('/empresa', (rep, res) =>
    res.send('<h1 style="color: blue"> empresa</h1>')
);
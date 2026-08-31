import express from "express";
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        mensagem: 'Barbearia Vintage Club!'
    });
});

app.get('/sobre', (req, res) => {
    res.json({
        sobre: 'História da barbearia desde 1998'
    });
});

app.get('/cortes', (req, res) => {
    const itens = [
        { id: 1, estilo: 'Butterfly cut', duracaoMinutos: 45, preco: 150.00},
        {id: 2, estilo: 'Bob cut', duracaoMinutos: 50, preco: 75.00},
        {id: 3, estilo: "Mullet", duracaoMinutos: 30, preco: 70.00}
    ];
    res.json(itens);
});

app.listen(PORT, () => {
    console.log('Servidor rodando na porta 3000');
    console.log(`http://localhost:${PORT}`)
});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/usuario', (req, res) => {
    const { nome, email } = req.body;

    console.log("--- Novo Dado Recebido ---");
    console.log(`Nome: ${nome}`);
    console.log(`Email: ${email}`);
    console.log("-------------------------");
    res.json({ message: 'Dados recebidos com sucesso!', data: { nome, email } });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
}); 
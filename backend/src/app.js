const express = require('express')
var bodyParser = require('body-parser');
const cors = require('cors');
const usuarioRota = require('./Routes/usuariosRoute.js');


const alunoController = require('./Controller/alunoController')
const usuarioController = require('./Controller/usuarioController')

const alunoRouter = express.Router();
const usuarioRoute = express.Router();

const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', (req, res) => { res.send('Bem vindo') })

alunoRouter
    .route('/api/aluno')
    .get(alunoController.teste)

// usuarioRoute
//     .route('/login')
//     .get(usuarioController.login)

app.use(cors());
app.use(alunoRouter);
app.use(usuarioRota)
// app.use(usuarioRoute);

app.listen(port, () => {
  console.log(`Aplicação rodando na porta: ${port}`)
})
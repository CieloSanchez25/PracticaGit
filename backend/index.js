console.log('hola mundo')
//const express = require('express')

const express = require('express') //exportar el modulo express
const cors = require('cors') //importar el paquete cors

const app = express() //inicializar la instancia
app.use(cors()); //habilitar cors para todas las solicitudes


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/ping',  (req, res) => {
    res.status(200).json(
        {
            message: 'pong'
        }
    )
})

app.listen(3000)
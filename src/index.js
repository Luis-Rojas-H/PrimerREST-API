const express = require('express')
const app = express()
const morgan = require('morgan')
var bodyParser = require('body-parser');// instalar: npm install body-parser

//Parsear el body usando body parser
app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false })); //body formulario

// settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

// routes
app.use(require('./routes/index'))
app.use('/api/movies', require('./routes/movies'))
app.use('/api/users', require('./routes/users'))


// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// empezando el servido
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
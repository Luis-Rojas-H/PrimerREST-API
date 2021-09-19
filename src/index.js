const express = require('express')
const app = express()
const morgan = require('morgan')

// settings
app.set('port', 3000)

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false     }))
app.use(express.json())

// empezando el servido
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
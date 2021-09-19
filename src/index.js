const express = require('express')
const app = express()
const morgan = require('morgan')

// middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// empezando el servido
app.listen(3000, () => {
    console.log(`Server on port ${3000}`)
})
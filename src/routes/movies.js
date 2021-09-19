const { Router } = require('express')
const router = Router()

router.get('/movie', (req, res) => {
    res.send('movies')
})

module.exports = router
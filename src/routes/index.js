const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    const data = {
        "title": "Hello Word",
        "name": "Droopy",
        "website": "larojash@uni.pe"
    }
    res.json(data)
})

module.exports = router
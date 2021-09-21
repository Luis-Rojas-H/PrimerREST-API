const { Router } = require('express')
const router = new Router()
const _ = require('underscore')
const movies = require('../sample.json')

router.get('/', (req, res) => {
    res.json(movies)
})

router.post('/', (req, res) => {
    const { title, year, rating, director } = req.body
    if ( title && year && rating && director ) {
        const id = movies.length + 1
        const newMovie = {id, ...req.body}
        movies.push(newMovie)
        
    }
    else {
        res.status(500).json({error: "hubo en grave error"})
    }
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { title, year, rating, director } = req.body
    if ( title && year && rating && director ) {
        _.each(movies, (movie, i) => {
            if(movie.id == id){
                movie.title = title
                movie.director = director
                movie.year = year
                movie.rating = rating
            }
        })
        res.json(movies)
    } else {
        res.status(500).json({error: "hubo en grave error"})
    }
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    if ( id ) {
        _.each(movies, (movie, i) => {
            if(movie.id == id){
                movies.splice(i, 1);
            }
        })
        res.json(movies)
    } else {
        res.status(500).json({error: "hubo en grave error"})
    }  
});

module.exports = router
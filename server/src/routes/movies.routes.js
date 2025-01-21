const express = require('express');
const moviesController = require('../controllers/movies.controller');
const moviesRoutes = express.Router();

moviesRoutes.get('/', moviesController.getAllMovies);
moviesRoutes.get('/:id', moviesController.getMovieById);
moviesRoutes.get('/genre/:genre', moviesController.getMoviesByGenre);
moviesRoutes.post('/', moviesController.createMovie);
moviesRoutes.patch('/:id', moviesController.updateMovie);
moviesRoutes.delete('/:id', moviesController.deleteMovie);

module.exports = moviesRoutes;

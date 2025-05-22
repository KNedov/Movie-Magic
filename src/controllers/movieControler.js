import express from 'express';
import movieService from '../services/movieService.js';

const movieController = express.Router();
movieController.get ('/create', (req, res) => {
  res.render('create');
});
movieController.post('/create', (req, res) => {
  const newMovie = req.body;
  movieService.createMovie(newMovie);

  res.redirect('/');
});
movieController.get('/:movieId/details', (req, res) => {
  //get movieId from parameters
  const movieId = req.params.movieId;

  res.render('details');
});
export default movieController;
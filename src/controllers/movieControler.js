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
export default movieController;
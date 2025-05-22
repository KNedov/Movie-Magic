import express from 'express';
import movieService from '../services/movieService.js';

const homeController=express.Router();


homeController.get('/', (req, res) => {
    const movies= movieService.getAll();
  res.render('home', { movies });
  
});
homeController.get('/about', (req, res) => {
  res.render('about');
});
homeController.get ('/create', (req, res) => {
  res.render('create');
});
homeController.get('/details', (req, res) => {
  res.render('details');
});
homeController.get('/search', (req, res) => {
  res.render('search');
});
export default homeController;
// This code defines a set of routes for an Express application using the Express Router.
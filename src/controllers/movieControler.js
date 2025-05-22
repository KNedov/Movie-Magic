import express from 'express';

const movieController = express.Router();
movieController.get ('/create', (req, res) => {
  res.render('create');
});
movieController.post('/create', (req, res) => {
  const data = req.body;
  console.log(data);
  res.redirect('/');
});
export default movieController;
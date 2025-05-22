import express from 'express';
import handebars from 'express-handlebars';

//Init express instance
const app = express();
//Add static middleware
//This middleware will serve static files from the public directory
app.use(express.static('./src/public'));
//Add and config view engine
app.engine('hbs', handebars.engine({
    extname: '.hbs'
}));
//Set default engine
app.set('view engine', 'hbs');
//Set views directory
app.set('views', './src/views');

//Config routes
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/about', (req, res) => {
  res.render('about');
});
app.get ('/create', (req, res) => {
  res.render('create');
});
app.get('/details', (req, res) => {
  res.render('details');
});
app.get('/search', (req, res) => {
  res.render('search');
});


//Start express web server
app.listen(5000,() => {
    console.log('Server is listening on http://localhost:5000.....');
    console.log('Press Ctrl+C to stop the server');
});
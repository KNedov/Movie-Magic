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
  res.render('home',{layout:false});
});

//Start express web server
app.listen(5000,() => {
    console.log('Server is listening on http://localhost:5000.....');
    console.log('Press Ctrl+C to stop the server');
});
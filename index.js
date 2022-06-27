import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars';
import hbs from 'hbs'
import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') dotenv.config();


const app = express()
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT


app.engine('.hbs', engine({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(app.get('views')),
  defaultLayout: 'home',
}));

hbs.registerPartials(__dirname + '/views/partials');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Middleware
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('home', {
    name: 'Kervin Gonzalez',
    title: 'Curso node'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    layout: false,
    name: 'Kervin Gonzalez',
    title: 'Curso node'
  })

})

app.get('/elements', (req, res) => {
  res.render('elements', {
    layout: false,
    name: 'Kervin Gonzalez',
    title: 'Curso node'
  })
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/template/404.html')
})

app.listen(port, () => console.log(`Escuchando por el puerto: ${port}`))
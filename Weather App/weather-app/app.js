require('dotenv').config();

const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

const viewsPath = path.join(__dirname, '../templates/views')
app.set('views', viewsPath)

app.get('', (req, res) => {
    // Provide HTML to render in the browser
    res.send('<h1>Weather</h1>')
});

// http://localhost:3000/weather?address=Philadephia&units=us
app.get('/weather', (req, res) => {
    // All query string key/value pairs are on req.query
    res.send('You provided "' + req.query.address + '" as the address.');
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Andrew Mead',
        errorMessage: 'Page not found.'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});

require('dotenv').config();

const express = require('express')
const app = express()

app.get('', (req, res) => {
    res.send('Hello express!');
});

app.get('/weather', (req, res) => {
    res.send('Your weather');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.');
});

// const request = require('request');
// const url = `https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/37.8267,-122.42331`;

// request({ url: url }, (error, response) => {
//     const responseBody = JSON.parse(response.body);
//     console.log(responseBody.daily.data[0].summary + ' It is currently ' +
//         responseBody.currently.temperature + ' degrees out. There is a ' +
//         responseBody.currently.precipProbability + '% chance of rain.')
// });
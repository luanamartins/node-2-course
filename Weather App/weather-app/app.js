require('dotenv').config();

const request = require('request');
const url = `https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/37.8267,-122.42331`;

request({ url: url }, (error, response) => {
    const responseBody = JSON.parse(response.body);
    console.log(responseBody.daily.data[0].summary + ' It is currently ' +
        responseBody.currently.temperature + ' degrees out. There is a ' +
        responseBody.currently.precipProbability + '% chance of rain.')
});
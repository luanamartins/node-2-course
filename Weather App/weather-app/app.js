require('dotenv').config();

const request = require('request');
const url = `https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/37.8267,-122.42331`;

request({ url: url }, (error, response) => {
    // Parse the response body from JSON string into JavaScript object
    const data = JSON.parse(response.body);
    // Will print the current temperature to the console
    console.log(data.currently.temperature);
});
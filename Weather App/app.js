require('dotenv').config()
const request = require('request');

function handleRequest(error, response, body) {
    console.log(JSON.stringify(body, undefined, 2));
}

requestData = {
    url: `https://api.darksky.net/forecast/${process.env.DARK_SKY_KEY}/37.8267,-122.4233`
};

request(requestData, handleRequest);
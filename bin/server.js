const express = require('express');
const app = express(),
    bodyParser = require("body-parser");
port = 3080;

const forecasts = [];

app.use(bodyParser.json());

app.get('/api/arrForecast', (req, res) => {
    res.json(forecasts);
});

app.post('/api/forecast', (req, res) => {
    const forecast = req.body.forecast;
    forecasts.push(forecast);
    res.json("user addedd!");
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

const PORT = 8000

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

app.get('/', (req, res) => {
    res.json('Welcome!!')
});

app.get('/test', (req, res) => {
    res.json('Test')
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

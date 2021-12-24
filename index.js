const PORT = 8000

const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const res = require('express/lib/response');

const app = express();

app.get('/', (req, res) => {
    res.status(401)
    res.json({
        message: 'test',
        blah: 'fucku'
    })
});

app.get('/test', (req, res) => {
    res.json('Test')
})

app.post('/fu', (req, res) => {
    var generator = require('generate-password');

    var password = generator.generate({
        length: 10,
        numbers: true
    });

    res.json({
        password: password
    })
})
app.get('/fu', (req, res) => {
    res.json({
        message: 'success'
    })
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

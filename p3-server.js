//import express
const express = require('express');
//initializ the express app. defines routes and settings
const app = express();
//host and port
const PORT = 8080;
const HOST = 'localhost';


//import functions
const {getCoinCombinations: coinCombo, coinValue} = require('./p3-module');

app.use(express.static('public'));

//sets up GET route with URL link
app.get('/coincombo', (req, res) => {
    //convert number
    const amount = Number(req.query.amount);
    //
    if (isNaN(amount) || amount < 0){
        return res.json({error: "Amount must be a postive number"})
    }

    res.json(coinCombo(amount));
})

//sets up GET route with URL link
app.get('/coinvalue', (req, res) =>{
    const {
        pennies = 0,
        nickels = 0,
        dimes = 0,
        quarters = 0,
        halves = 0,
        dollars = 0
    } = req.query;

    //makes every value an integer
    const coinCounts = {
        pennies: parseInt(pennies) || 0,
        nickels: parseInt(nickels) || 0,
        dimes: parseInt(dimes) || 0,
        quarters: parseInt(quarters) || 0,
        halves: parseInt(halves) || 0,
        dollars: parseInt(dollars) || 0
    
    };

    //calls "coinvalue" function with object and sends back result as JSON
    res.json(coinValue(coinCounts));
})

//error code
app.use((req, res) => {
    res.status(404).send('404 Not Found');
});
//makes it run
app.listen(PORT, HOST, () => {
    console.log(`server running at http://${HOST}:${PORT} `);
})

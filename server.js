const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// CSOMAGOK ADATAI
const plans = [
    { level: 1, name: "ALPHA", price: 100, daily: 2, color: "#00ff41" },
    { level: 2, name: "BETA", price: 500, daily: 12, color: "#00e5ff" },
    { level: 3, name: "GAMMA", price: 2000, daily: 55, color: "#7000ff" },
    { level: 4, name: "DELTA", price: 5000, daily: 150, color: "#ff0055" },
    { level: 5, name: "OMEGA", price: 10000, daily: 350, color: "#ffd700" }
];

app.get('/', (req, res) => {
    res.render('index', { plans });
});

app.get('/dashboard', (req, res) => {
    // Demo felhasználó az építés alatt
    const user = { fullname: "Operátor", balance: 1250.50, vipLevel: 2 };
    res.render('dashboard', { user, plans });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, "0.0.0.0", () => console.log(`⚡ Skyhigh Arbitrage Active on ${PORT}`));
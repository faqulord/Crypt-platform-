const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
        <body style="background: #000; color: #00ff41; font-family: monospace; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0;">
            <div style="text-align: center; border: 1px solid #00ff41; p: 40px; border-radius: 20px; padding: 50px; box-shadow: 0 0 20px rgba(0,255,65,0.2);">
                <h1 style="letter-spacing: 5px;">SKYHIGH ARBITRAGE</h1>
                <p style="color: #555;">SYSTEM INITIALIZING... [v1.0.0]</p>
                <div style="margin-top: 20px; font-size: 12px; color: #00ff41; opacity: 0.7;">A platform fejlesztés alatt áll.</div>
            </div>
        </body>
    `);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`⚡ Arbitrage Server running on port ${PORT}`);
});
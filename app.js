const express = require('express');
const indexRoute = require('./routes/indexRoutes');
const port = 3003;
const cors = require('cors');

const app = express();

// Habilitar CORS para todas as origens
app.use(cors());

app.use(express.json());

// Use Routes
app.use('/', indexRoute);

// Configure Server
app.listen(port, () => {
    console.log(`It's running at http://localhost:${port}`);
});

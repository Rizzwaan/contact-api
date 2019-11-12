const express = require('express');
const app = express();
const contactRoutes = require('./routes/contacts')
const PORT = 3000;


// using as middleware
app.use('/api/contacts', contactRoutes)


app.listen(PORT, () => console.log('server running on port 3000'));
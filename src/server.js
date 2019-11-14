const express = require('express');
const app = express();
const contactRoutes = require('./routes/contacts')
const PORT = 3000;
const morgan = require('morgan');


// using as middleware
app.use(morgan('dev'));

app.use('/api/contacts', contactRoutes)


app.listen(PORT, () => console.log('server running on port 3000'));
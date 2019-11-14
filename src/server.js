const express = require('express');
const app = express();
const contactRoutes = require('./routes/contacts')
const PORT = 3000;
const morgan = require('morgan');


// using as middleware
app.use(morgan('dev'));

app.use('/api/contacts', contactRoutes)

//handle error
app.use((req,res,next) => {
  const error = new Error('Not Found!')
  error.status = 404
  next(error)
})

//custom error handler
app.use((error, req, res, next ) => {
  res.status(error.status || 500);
  res.json({
    message : error.message
  })
})

app.listen(PORT, () => console.log('server running on port 3000'));
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const recipeRouter = require('./routes/recipebook')
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: '*',
    methods: 'GET,POST', 
  }));
app.use('/api/recipes', recipeRouter);

app.listen( PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
const express = require('express');
const router = express.Router();

const { getAllRecipes, 
    getRecipeById
} = require ('../services/recivebookService.js')

router.get('/', getAllRecipes);

router.get('/:id', getRecipeById);

module.exports = router;
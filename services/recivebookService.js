const axios = require('axios');
require('dotenv').config();
const MEALDB_BASE_URL = process.env.MEALDB_BASE_URL;


async function getAllRecipes(req, res) {
  const { ingredient, category, area } = req.query;

  const endpoint = ingredient
    ? `/filter.php?i=${ingredient}`
    : category
    ? `/filter.php?c=${category}`
    : area
    ? `/filter.php?a=${area}`
    : `/search.php?s=`;

  try {
    const response = await axios.get(`${MEALDB_BASE_URL}${endpoint}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipes', error });
  }
}

async function getRecipeById(req, res) {
  const { id } = req.params;
  try {
    const response = await axios.get(`${MEALDB_BASE_URL}/lookup.php?i=${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recipe info', error });
  }
}

module.exports = {
  getAllRecipes,
  getRecipeById,
};

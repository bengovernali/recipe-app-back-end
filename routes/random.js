const express = require("express"),
  cors = require("cors"),
  fetch = require("node-fetch");

const router = express.Router();

const API_KEY = process.env["SPOONACULAR_KEY"];

router.use(cors());

async function getRandomRecipe() {
    const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`
    )
    console.log(response);
}

router.get("/random", async function(req, res) {
    const recipe = await getRandomRecipe();
    return recipe;
}) 

module.exports = router;
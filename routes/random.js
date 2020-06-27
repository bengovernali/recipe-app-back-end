const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

require("dotenv").config();

const router = express.Router();
router.use(cors());

const API_KEY = process.env.SPOONACULAR_KEY;

async function getRandomRecipe() {
    const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}`
    )
    return response.json();
}

router.get("/", async function(req, res) {
    const recipe = await getRandomRecipe();
    res.send(recipe);
}) 

module.exports = router;
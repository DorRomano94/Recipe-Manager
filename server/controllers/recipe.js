import recipeService from '../services/recipe.js';


const getAllRecipe = async (req, res) => {
    try {
        const users = await recipeService.getAllRecipe();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getRecipeById = async (req, res) => {
    try {
        const users = await recipeService.getRecipeById(req.params.id);
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createRecipe = async (req, res) => {
    try {
        const users = await recipeService.createRecipe(req.body);
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateRecipe = async (req, res) => {
    try {
        const users = await recipeService.updateRecipe(req.params.id, req.body);
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export default {
    getAllRecipe,
    getRecipeById,
    createRecipe,
    updateRecipe
}


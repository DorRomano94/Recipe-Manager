import express from 'express'
import recipeController from '../controllers/recipe.js'
const router = express.Router();

router.get('/', recipeController.getAllRecipe);
router.get('/:id', recipeController.getRecipeById);
router.post('/', recipeController.createRecipe);
router.put('/:id', recipeController.updateRecipe);
// router.delete('/:id', userController.deleteUser);

export default router;

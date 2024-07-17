
import Recipe from '../model/Recipe.js'

const pancakeRecipe = new Recipe(
    'Pancakes',
    ['2 cups of flour', '2 eggs', '1 cup of milk', '1 tbsp sugar', '1 tsp baking powder'],
    ['Mix all the ingredients together', 'Heat a lightly oiled griddle or frying pan over medium high heat', 'Pour or scoop the batter onto the griddle', 'Brown on both sides and serve hot']
);

const spaghettiRecipe = new Recipe(
    'Spaghetti Bolognese',
    ['200g spaghetti', '2 tbsp olive oil', '1 onion, chopped', '2 garlic cloves, minced', '400g ground beef', '400g canned tomatoes', '2 tbsp tomato paste', '1 tsp dried oregano', 'Salt and pepper to taste'],
    ['Cook the spaghetti according to package instructions', 'Heat olive oil in a pan over medium heat', 'Add chopped onion and garlic, and sauté until translucent', 'Add ground beef and cook until browned', 'Stir in canned tomatoes, tomato paste, and oregano', 'Simmer for 20 minutes', 'Season with salt and pepper', 'Serve the sauce over the cooked spaghetti']
);

// Chocolate Cake Recipe
const chocolateCakeRecipe = new Recipe(
    'Chocolate Cake',
    ['1 3/4 cups all-purpose flour', '1 1/2 cups sugar', '3/4 cup cocoa powder', '1 1/2 tsp baking powder', '1 1/2 tsp baking soda', '1 tsp salt', '2 eggs', '1 cup milk', '1/2 cup vegetable oil', '2 tsp vanilla extract', '1 cup boiling water'],
    ['Preheat oven to 350°F (175°C)', 'Grease and flour two 9-inch round baking pans', 'In a large bowl, stir together the flour, sugar, cocoa, baking powder, baking soda, and salt', 'Add the eggs, milk, oil, and vanilla, and beat for 2 minutes on medium speed', 'Stir in the boiling water last (batter will be thin)', 'Pour evenly into the prepared pans', 'Bake for 30 to 35 minutes, or until a toothpick inserted into the center comes out clean', 'Cool in the pans for 10 minutes, then remove to a wire rack to cool completely']
);

const recipes = {
    1: pancakeRecipe,
    2: spaghettiRecipe,
    3: chocolateCakeRecipe
}

const getAllRecipe = async () => {
    return recipes
}

const getRecipeById = async (id) => {
    return recipes[0]
}
const createRecipe = async (data) => {
    return recipes[0]
}
const updateRecipe = async (id, data) => {
    return recipes[0]
}


export default {
    getAllRecipe,
    getRecipeById,
    createRecipe,
    updateRecipe
}
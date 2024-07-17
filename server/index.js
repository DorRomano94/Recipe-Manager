import express from 'express'
const app = express()
import recipeRoutes  from './routes/recipe.js'

app.use(express.json());
app.use('/api/recipe', recipeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

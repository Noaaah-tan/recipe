import { Injectable } from "@nestjs/common";
import { Recipe, RecipeStatus } from "../entity/recipe.model";
import { v4 as uuid} from 'uuid'


@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [];

    getAllRecipes(): Recipe[] {
        return this.recipes;
}

getRecipeById(id: string): Recipe {
    return this.recipes.find((recipe) => recipe.Recipe_id === id);
}

createRecipe(recipe_Title: string, recipe_Description: string ): Recipe{
    const recipe: Recipe = {
        Recipe_id: uuid() ,
        recipe_Title, 
        recipe_Description,
        status: RecipeStatus.OPEN
    };

    this.recipes.push(recipe);  //task value mapupush sa tasks array
    return recipe;

}

deleteRecipe(id: string): void {
     this.recipes = this.recipes.filter((recipe) => recipe.Recipe_id !== id);
}

updateRecipeStatus(id: string, recipe_Description: string) {
     const recipe = this.getRecipeById(id);
     recipe.recipe_Description = recipe_Description;
     return recipe;

}

}
import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { get } from "http";
import { Recipe, RecipeStatus } from "src/recipe/entity/recipe.model";
import { RecipeService } from "src/recipe/usecase/recipe.service";
import { TaskStatus } from "src/tasks/task.model";


@Controller('recipe')
export class RecipeController {
   

    constructor(private recipeService:RecipeService ){}

    @Get('/fetch')
    getAllRecipes() {
        return this.recipeService.getAllRecipes();

    }

    @Get('/fetch/:id')
    getRecipeByID(@Param('id') id: string) : Recipe {
        return this.recipeService.getRecipeById(id);

    }

    @Post('/create')
    createRecipe(
        @Body('Name') title: string,
        @Body('Description') description: string
    ): Recipe {
        return this.recipeService.createRecipe(title,description);

    }
    
    @Delete('/delete/:id')
    deleteRecipe(@Param('id') id:string): void {
        return this.recipeService.deleteRecipe(id);

    }
  
    @Patch('/update/:id/status')
    updateRecipeStatus(
        @Param('id') id: string,
        @Body('Description') recipe_Description: string    
    ): Recipe {

        return this.recipeService.updateRecipeStatus(id,recipe_Description);

    }

}

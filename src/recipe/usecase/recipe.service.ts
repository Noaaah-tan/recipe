import { Injectable, NotFoundException } from "@nestjs/common";
import { RecipeStatus } from "../entity/recipe-status.enum";
import { CreateRecipeDto } from "../adapter/dto/create-recipe.dto";
import { GetRecipeFilterDto } from "src/recipe/adapter/dto/get-recipe-filter.dto";
import { RecipesRepository } from "../adapter/repository/recipes.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Recipe } from "../entity/recipe.entity";
import {v4 as uuid} from "uuid";
import { User } from "src/auth/Entity/user.entity";




@Injectable()
export class RecipeService {
    
    constructor(
        @InjectRepository(RecipesRepository)
        private recipeRepository:RecipesRepository,
    ){

    }


getRecipes(filterDto:GetRecipeFilterDto, user: User): Promise<Recipe[]>{
    return this.recipeRepository.getRecipes(filterDto,user);

}

async getRecipeById(id:string, user: User): Promise<Recipe>{
    const found = await this.recipeRepository.findOne({where: {id, user}});

    if (!found) {
        throw new NotFoundException('Recipe with ID ${id} not found');
    }

    return found;

}

 createRecipe(createRecipeDto:CreateRecipeDto, user: User): Promise<Recipe>{

     return this.recipeRepository.createRecipe(createRecipeDto, user);
}


async deleteRecipe(id: string, user: User): Promise<void> {
    const result = await this.recipeRepository.delete({ id, user });
    
    if (result.affected === 0){
        throw new NotFoundException ('Recipe with ID `${id}` not found');
    }
}

async updateRecipeStatus(id: string, status: RecipeStatus, user: User): Promise<Recipe> {
     const recipe = await this.getRecipeById(id, user);
     
recipe.status = status;
    await this.recipeRepository.save(recipe);

     return recipe;

}

}
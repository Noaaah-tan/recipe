import { Module } from "@nestjs/common";
import { RecipeController } from "./adapter/controller/recipe.controller";
import { RecipeService } from "./usecase/recipe.service";


@Module({
    controllers: [RecipeController],
    providers: [RecipeService ]
  })
  export class RecipeModule {}
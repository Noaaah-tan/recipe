import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RecipeController } from "./adapter/controller/recipe.controller";
import { RecipeService } from "./usecase/recipe.service";
import { RecipesRepository } from "./adapter/repository/recipes.repository";
import { Recipe } from "./entity/recipe.entity";
import { AuthModule } from "src/auth/auth.module";


@Module({
  imports: [TypeOrmModule.forFeature([Recipe]),
  AuthModule,
],
  controllers: [RecipeController],
  providers: [RecipeService, RecipesRepository ],
  })
  export class RecipeModule {}
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GetRecipeFilterDto } from 'src/recipe/adapter/dto/get-recipe-filter.dto';
import { RecipeService } from 'src/recipe/usecase/recipe.service';
import { UpdateRecipeStatusDto } from '../dto/update-recipe-status.dto';
import { Recipe } from 'src/recipe/entity/recipe.entity';
import { CreateRecipeDto } from '../dto/create-recipe.dto';
import { AuthGuard } from '@nestjs/passport';
import { v4 as uuid } from 'uuid';
import { User } from 'src/auth/Entity/user.entity';
import { GetUser } from 'src/auth/Controller/get-user.decorator';

@Controller('recipe')
@UseGuards(AuthGuard())
export class RecipeController {
  constructor(private recipeService: RecipeService) {}

  @Get('/fetch')
  getRecipe(
    @Query() filterDto: GetRecipeFilterDto,
    @GetUser() user: User,
  ): Promise<Recipe[]> {
    return this.recipeService.getRecipes(filterDto, user);
  }

  @Get('fetch/:id')
  getRecipeById(
    @Param('id') id: string,
    @GetUser() user: User,
  ): Promise<Recipe> {
    return this.recipeService.getRecipeById(id, user);
  }

  @Post('/create')
  createRecipe(
    @Body() createRecipeDto: CreateRecipeDto,
    @GetUser() user: User,
  ): Promise<Recipe> {
    return this.recipeService.createRecipe(createRecipeDto, user);
  }

  @Delete('/delete/:id')
  deleteRecipe(@Param('id') id: string, @GetUser() user: User): Promise<void> {
    return this.recipeService.deleteRecipe(id, user);
  }

  @Patch('/update/:id/status')
  updateRecipeStatus(
    @Param('id') id: string,
    @Body() updateRecipeStatusDto: UpdateRecipeStatusDto,
    @GetUser() user: User,
  ): Promise<Recipe> {
    const { status } = updateRecipeStatusDto;
    return this.recipeService.updateRecipeStatus(id, status, user);
  }
}

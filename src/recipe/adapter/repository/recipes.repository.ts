import { DataSource, Entity, Repository } from 'typeorm';
import { Recipe } from '../../entity/recipe.entity';
import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from '../dto/create-recipe.dto';
import { RecipeStatus } from 'src/recipe/entity/recipe-status.enum';
import { GetRecipeFilterDto } from '../dto/get-recipe-filter.dto';
import { User } from 'src/auth/Entity/user.entity';

@Injectable()
export class RecipesRepository extends Repository<Recipe> {
  constructor(private dataSource: DataSource) {
    super(Recipe, dataSource.createEntityManager());
  }

  async getRecipes(
    filterDto: GetRecipeFilterDto,
    user: User,
  ): Promise<Recipe[]> {
    const { status, search } = filterDto;

    const query = this.createQueryBuilder('recipe');
    query.where({ user });

    if (status) {
      query.andWhere('recipe.status = :status', { status });
    }
    if (search) {
      query.andWhere(
        '(LOWER(recipe.title) LIKE LOWER(:search) OR LOWER(recipe.description) LIKE LOWER(:search))',
        { search: `%${search}%` },
      );
    }

    const recipes = await query.getMany();
    return recipes;
  }

  async createRecipe(
    createRecipeDto: CreateRecipeDto,
    user: User,
  ): Promise<Recipe> {
    const { title, description } = createRecipeDto;

    const recipe = this.create({
      title,
      description,
      status: RecipeStatus.OPEN,
      user,
    });

    await this.save(recipe);
    return recipe;
  }
}

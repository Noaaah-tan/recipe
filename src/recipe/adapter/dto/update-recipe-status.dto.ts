import { IsEnum, isEnum } from 'class-validator';
import { RecipeStatus } from 'src/recipe/entity/recipe-status.enum';

export class UpdateRecipeStatusDto {
  @IsEnum(RecipeStatus)
  status: RecipeStatus;
}

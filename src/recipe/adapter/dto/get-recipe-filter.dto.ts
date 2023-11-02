import { IsEnum, IsOptional, IsString } from 'class-validator';
import { RecipeStatus } from 'src/recipe/entity/recipe-status.enum';

export class GetRecipeFilterDto {
  @IsOptional()
  @IsEnum(RecipeStatus)
  status?: RecipeStatus;

  @IsOptional()
  @IsString()
  search?: string;
}

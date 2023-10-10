import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { RecipeModule } from './recipe/recipe.module';



@Module({

  imports: [TasksModule, RecipeModule]
})
export class AppModule {}

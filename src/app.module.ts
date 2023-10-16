import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { RecipeModule } from './recipe/recipe.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';



@Module({

  imports: [TasksModule, RecipeModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password:'noah',
    database: 'task-management',
    autoLoadEntities: true,
    synchronize: true,
  }), AuthModule,
],
})
export class AppModule {}

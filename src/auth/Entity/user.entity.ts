import { Recipe } from 'src/recipe/entity/recipe.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany((_type) => Recipe, (recipe) => recipe.user, { eager: true })
  recipes: Recipe[];
}

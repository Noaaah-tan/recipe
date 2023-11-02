import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { RecipeStatus } from './recipe-status.enum';
import { User } from 'src/auth/Entity/user.entity';
import { Exclude } from 'class-transformer';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn('uuid') // Specify 'uuid' for a UUID primary key
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: RecipeStatus;

  @ManyToOne((_type) => User, (user) => user.recipes, { eager: false })
  @Exclude({ toPlainOnly: true })
  user: User;
}

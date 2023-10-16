import { Module } from '@nestjs/common';
import { AuthService } from './usecase/auth.service';
import { AuthController } from './Controller/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './Adapter/dto/repository/users.repository'; 
import { User } from './Entity/user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './Adapter/dto/repository/jwt.strategy';

@Module({

  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({ 
      secret: 'topSecret51',
      signOptions: {
        expiresIn: 3600,
      }
     }),
    TypeOrmModule.forFeature([User])],
  providers: [AuthService, UsersRepository, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtStrategy, PassportModule],

})
export class AuthModule {}

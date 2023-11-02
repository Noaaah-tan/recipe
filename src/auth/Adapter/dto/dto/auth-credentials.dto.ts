/* eslint-disable prettier/prettier */
import { IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { IsUsernameWhitecloak } from './whitecloak.validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(40)
  @IsUsernameWhitecloak({
    message: 'Only whitecloak employees are allowed .',
  })
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password: string;
}

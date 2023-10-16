import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from '../Adapter/dto/dto/auth-credentials.dto';
import { AuthService } from '../usecase/auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('/signup')
    signUp(@Body() authCredentialsDto:AuthCredentialsDto): Promise<void>{
        return this.authService.signUp(authCredentialsDto);

    }

    @Post('/signin')
    signIn(@Body() authCredentialsDto:AuthCredentialsDto): Promise<{ accessToken: string }>{
        return this.authService.signIn(authCredentialsDto);

    }
}
 
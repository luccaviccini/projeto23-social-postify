import { Controller, Body, Post, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSigninDto } from './dto/auth-signin.dto'; 

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @HttpCode(200)
  async signin(@Body() authSigninDto: AuthSigninDto) {
    return this.authService.signin(authSigninDto);
  }
}

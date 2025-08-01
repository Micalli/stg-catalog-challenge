import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SinginDto } from './dto/signIn.dto';
import { IsPublic } from 'src/shared/decorators/isPublic';
import { SingupDto } from './dto/signUp.dto';

@IsPublic()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('singin')
  authenticate(@Body() singinDto: SinginDto) {
    return this.authService.singin(singinDto);
  }

  @Post('singup')
  create(@Body() singupDto: SingupDto) {
    return this.authService.singup(singupDto);
  }

  @Get()
  HelloWord() {
    return 'hello';
  }
}

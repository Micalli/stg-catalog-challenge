import {
  BadGatewayException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { SinginDto } from './dto/signIn.dto';
import { supabase } from 'src/shared/database/supabase';
import { SingupDto } from './dto/signUp.dto';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  async singin(singInDto: SinginDto) {
    const { email, password } = singInDto;

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (!data || error) {
      throw new UnauthorizedException('Credenciais inválida.');
    }

    const accessToken = await this.generateAccessToken(
      data.user.id,
      data.user.email,
    );

    return { accessToken };
  }

  async singup(singupDto: SingupDto) {
    const { email, name, password } = singupDto;
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
        },
      },
    });

    if (!data || error) {
      throw new BadGatewayException('Não foi possível criar o usuário.');
    }
    console.log('🚀 ~ AuthService ~ singup ~ data:', data);

    const accessToken = await this.generateAccessToken(
      data.user.id,
      data.user.email,
    );

    return { accessToken };
  }
  private async generateAccessToken(userId: string, email: string) {
    return await this.jwtService.signAsync({ sub: userId, email });
  }
}

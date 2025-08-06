import {
  BadGatewayException,
  ForbiddenException,
  Injectable,
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
      throw new ForbiddenException('Credenciais inválida.');
    }

    return { accessToken: data.session.access_token };
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

    return { accessToken: data.session.access_token };
  }

  async singout() {
    return await supabase.auth.signOut();
  }

  p;
}

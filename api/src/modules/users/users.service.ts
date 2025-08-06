import { Injectable } from '@nestjs/common';
import { supabase } from 'src/shared/database/supabase';

@Injectable()
export class UsersService {
  async me(req: Request) {
    const authHeader = req.headers['authorization'];
    const token = authHeader.split(' ')[1];
    const { data, error } = await supabase.auth.getUser(token);

    if (error) {
      console.error('Erro ao buscar usuário:', error.message);
      return null;
    }

    return data;
  }
}

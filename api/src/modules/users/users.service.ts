import { Injectable } from '@nestjs/common';
import { supabase } from 'src/shared/database/supabase';

@Injectable()
export class UsersService {
  async me() {
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      console.error('Erro ao buscar usuário:', error.message);
      return null;
    }

    return data;
  }
}

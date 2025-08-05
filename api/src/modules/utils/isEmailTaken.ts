import { BadGatewayException } from '@nestjs/common';
import { supabase } from 'src/shared/database/supabase';

export async function isEmailTaken(userId: string): Promise<boolean> {
  try {
    const { data, error } = await supabase.auth.admin.getUserById(userId);

    if (error) throw error;

    return true;
  } catch (error) {
    throw new BadGatewayException('Email já existente.');
  }
}

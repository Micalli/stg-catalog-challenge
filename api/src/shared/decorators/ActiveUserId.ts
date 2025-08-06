import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

export const ActiveUserId = createParamDecorator<undefined>(
  (data, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    const token = authHeader.split(' ')[1];

    const userId = extractUserIdFromToken(token);
    if (!userId) {
      throw new UnauthorizedException();
    }
    return userId;
  },
);

export async function extractUserIdFromToken(token: string): Promise<string> {
  const decoded = jwt.decode(token) as { sub?: string };
  if (!decoded || !decoded.sub) {
    throw new UnauthorizedException('Token inválido');
  }
  return decoded.sub;
}

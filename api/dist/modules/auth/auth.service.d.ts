import { JwtService } from '@nestjs/jwt';
import { SinginDto } from './dto/signIn.dto';
import { SingupDto } from './dto/signUp.dto';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    singin(singInDto: SinginDto): Promise<{
        accessToken: string;
    }>;
    singup(singupDto: SingupDto): Promise<{
        accessToken: string;
    }>;
    singout(): Promise<{
        error: import("@supabase/auth-js").AuthError | null;
    }>;
    p: any;
}

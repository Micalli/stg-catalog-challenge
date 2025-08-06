import { AuthService } from './auth.service';
import { SinginDto } from './dto/signIn.dto';
import { SingupDto } from './dto/signUp.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    authenticate(singinDto: SinginDto): Promise<{
        accessToken: string;
    }>;
    create(singupDto: SingupDto): Promise<{
        accessToken: string;
    }>;
    singout(): Promise<{
        error: import("@supabase/auth-js").AuthError | null;
    }>;
}

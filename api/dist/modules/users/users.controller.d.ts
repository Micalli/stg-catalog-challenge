import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    me(): Promise<{
        user: import("@supabase/auth-js").User;
    }>;
}

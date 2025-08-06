export declare class UsersService {
    me(req: Request): Promise<{
        user: import("@supabase/auth-js").User;
    }>;
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const supabase_1 = require("../../shared/database/supabase");
let AuthService = class AuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async singin(singInDto) {
        const { email, password } = singInDto;
        const { data, error } = await supabase_1.supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });
        if (!data || error) {
            throw new common_1.ForbiddenException('Credenciais inválida.');
        }
        return { accessToken: data.session.access_token };
    }
    async singup(singupDto) {
        const { email, name, password } = singupDto;
        const { data, error } = await supabase_1.supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    name: name,
                },
            },
        });
        if (!data || error) {
            throw new common_1.BadGatewayException('Não foi possível criar o usuário.');
        }
        return { accessToken: data.session.access_token };
    }
    async singout() {
        return await supabase_1.supabase.auth.signOut();
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map
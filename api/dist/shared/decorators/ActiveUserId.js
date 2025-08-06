"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActiveUserId = void 0;
exports.extractUserIdFromToken = extractUserIdFromToken;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
exports.ActiveUserId = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    const token = authHeader.split(' ')[1];
    const userId = extractUserIdFromToken(token);
    if (!userId) {
        throw new common_1.UnauthorizedException();
    }
    return userId;
});
async function extractUserIdFromToken(token) {
    const decoded = jwt.decode(token);
    if (!decoded || !decoded.sub) {
        throw new common_1.UnauthorizedException('Token inválido');
    }
    return decoded.sub;
}
//# sourceMappingURL=ActiveUserId.js.map
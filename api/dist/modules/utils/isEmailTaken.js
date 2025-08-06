"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmailTaken = isEmailTaken;
const common_1 = require("@nestjs/common");
const supabase_1 = require("../../shared/database/supabase");
async function isEmailTaken(userId) {
    try {
        const { data, error } = await supabase_1.supabase.auth.admin.getUserById(userId);
        if (error)
            throw error;
        return true;
    }
    catch (error) {
        throw new common_1.BadGatewayException('Email já existente.');
    }
}
//# sourceMappingURL=isEmailTaken.js.map
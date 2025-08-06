"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.supabase = void 0;
exports.validateSupabaseToken = validateSupabaseToken;
const supabase_js_1 = require("@supabase/supabase-js");
exports.supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
async function validateSupabaseToken(accessToken) {
    const { data, error } = await exports.supabase.auth.getUser(accessToken);
    if (error || !data.user)
        throw new Error('Token inválido');
    return data.user;
}
//# sourceMappingURL=supabase.js.map
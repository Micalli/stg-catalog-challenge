"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./prisma.service");
const cart_items_repository_1 = require("./repositories/cart_items.repository");
const products_repository_1 = require("./repositories/products.repository");
const shopping_history_repository_copy_1 = require("./repositories/shopping_history.repository copy");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            prisma_service_1.PrismaService,
            cart_items_repository_1.CartItemsRepository,
            products_repository_1.ProductsRepository,
            shopping_history_repository_copy_1.ShoppingHistoryRepository,
        ],
        exports: [cart_items_repository_1.CartItemsRepository, products_repository_1.ProductsRepository, shopping_history_repository_copy_1.ShoppingHistoryRepository],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map
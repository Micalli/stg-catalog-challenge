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
exports.CartItemsService = void 0;
const common_1 = require("@nestjs/common");
const cart_items_repository_1 = require("../../shared/database/repositories/cart_items.repository");
let CartItemsService = class CartItemsService {
    constructor(cartItemsRepository) {
        this.cartItemsRepository = cartItemsRepository;
    }
    async create(createCartItemDto) {
        const { productId, userId } = createCartItemDto;
        const alreadyCartExists = await this.cartItemsRepository.findFirst({
            where: {
                userId,
            },
        });
        if (alreadyCartExists) {
            return { cartItemId: '123' };
        }
        return await this.cartItemsRepository.create({
            data: {
                productId,
                quantity: 1,
                userId,
            },
        });
    }
    async addProduct(createCartItemDto) {
        const { productId, userId } = createCartItemDto;
        const existingCartItem = await this.cartItemsRepository.findFirst({
            where: {
                userId,
                productId,
            },
        });
        if (existingCartItem) {
            return await this.cartItemsRepository.update({
                where: { id: existingCartItem.id },
                data: {
                    quantity: existingCartItem.quantity + 1,
                },
            });
        }
        else {
            return await this.cartItemsRepository.create({
                data: {
                    productId,
                    quantity: 1,
                    userId,
                },
            });
        }
    }
    async removeProduct(cartItemId) {
        return await this.cartItemsRepository.delete({
            where: { id: cartItemId },
        });
    }
    async resetCart(userId) {
        return await this.cartItemsRepository.deleteMany({
            where: { userId },
        });
    }
    async updateProductQuantity(cartItemId, userId, updateQuantityCartItemDto) {
        const { newQuantity } = updateQuantityCartItemDto;
        return await this.cartItemsRepository.update({
            where: { id: cartItemId, userId },
            data: {
                quantity: newQuantity,
            },
        });
    }
    async findUserCart(userId) {
        const data = await this.cartItemsRepository.findMany({
            where: { userId },
            include: {
                product: true,
            },
        });
        return data;
    }
};
exports.CartItemsService = CartItemsService;
exports.CartItemsService = CartItemsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cart_items_repository_1.CartItemsRepository])
], CartItemsService);
//# sourceMappingURL=cart_items.service.js.map
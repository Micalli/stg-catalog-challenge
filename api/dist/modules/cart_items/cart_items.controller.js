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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemsController = void 0;
const common_1 = require("@nestjs/common");
const cart_items_service_1 = require("./cart_items.service");
const create_cart_item_dto_1 = require("./dto/create-cart_item.dto");
const ActiveUserId_1 = require("../../shared/decorators/ActiveUserId");
const update_quantity_cart_item_dto_1 = require("./dto/update-quantity-cart_item.dto");
let CartItemsController = class CartItemsController {
    constructor(cartItemsService) {
        this.cartItemsService = cartItemsService;
    }
    create(createCartItemDto) {
        return this.cartItemsService.create(createCartItemDto);
    }
    addProduct(createCartItemDto) {
        return this.cartItemsService.addProduct(createCartItemDto);
    }
    updateProductQuantity(cartItemId, userId, updateQuantityCartItemDto) {
        return this.cartItemsService.updateProductQuantity(cartItemId, userId, updateQuantityCartItemDto);
    }
    findUserCart(userId) {
        return this.cartItemsService.findUserCart(userId);
    }
    removeProduct(cartItemId) {
        return this.cartItemsService.removeProduct(cartItemId);
    }
    resetCart(userId) {
        return this.cartItemsService.resetCart(userId);
    }
};
exports.CartItemsController = CartItemsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cart_item_dto_1.CreateCartItemDto]),
    __metadata("design:returntype", void 0)
], CartItemsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cart_item_dto_1.CreateCartItemDto]),
    __metadata("design:returntype", void 0)
], CartItemsController.prototype, "addProduct", null);
__decorate([
    (0, common_1.Post)('/update/quantity/:cartItemId'),
    __param(0, (0, common_1.Param)('cartItemId')),
    __param(1, (0, ActiveUserId_1.ActiveUserId)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_quantity_cart_item_dto_1.UpdateQuantityCartItemDto]),
    __metadata("design:returntype", void 0)
], CartItemsController.prototype, "updateProductQuantity", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, ActiveUserId_1.ActiveUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartItemsController.prototype, "findUserCart", null);
__decorate([
    (0, common_1.Delete)('remove/:cartItemId'),
    __param(0, (0, common_1.Param)('cartItemId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartItemsController.prototype, "removeProduct", null);
__decorate([
    (0, common_1.Delete)('reset'),
    __param(0, (0, ActiveUserId_1.ActiveUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartItemsController.prototype, "resetCart", null);
exports.CartItemsController = CartItemsController = __decorate([
    (0, common_1.Controller)('cart-items'),
    __metadata("design:paramtypes", [cart_items_service_1.CartItemsService])
], CartItemsController);
//# sourceMappingURL=cart_items.controller.js.map
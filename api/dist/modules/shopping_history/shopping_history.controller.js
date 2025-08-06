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
exports.ShoppingHistoryController = void 0;
const common_1 = require("@nestjs/common");
const shopping_history_service_1 = require("./shopping_history.service");
const create_shopping_history_dto_1 = require("./dto/create-shopping_history.dto");
const ActiveUserId_1 = require("../../shared/decorators/ActiveUserId");
let ShoppingHistoryController = class ShoppingHistoryController {
    constructor(shoppingHistoryService) {
        this.shoppingHistoryService = shoppingHistoryService;
    }
    create(createShoppingHistoryDto, userId) {
        return this.shoppingHistoryService.create(createShoppingHistoryDto, userId);
    }
    findByUser(userId) {
        return this.shoppingHistoryService.findByUser(userId);
    }
    findOne(id) {
        return this.shoppingHistoryService.findOne(+id);
    }
    remove(id) {
        return this.shoppingHistoryService.remove(+id);
    }
};
exports.ShoppingHistoryController = ShoppingHistoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, ActiveUserId_1.ActiveUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_shopping_history_dto_1.CreateShoppingHistoryDto, String]),
    __metadata("design:returntype", void 0)
], ShoppingHistoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, ActiveUserId_1.ActiveUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingHistoryController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingHistoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ShoppingHistoryController.prototype, "remove", null);
exports.ShoppingHistoryController = ShoppingHistoryController = __decorate([
    (0, common_1.Controller)('shopping-history'),
    __metadata("design:paramtypes", [shopping_history_service_1.ShoppingHistoryService])
], ShoppingHistoryController);
//# sourceMappingURL=shopping_history.controller.js.map
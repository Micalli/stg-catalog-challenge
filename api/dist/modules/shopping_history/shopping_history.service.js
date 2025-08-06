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
exports.ShoppingHistoryService = void 0;
const common_1 = require("@nestjs/common");
const shopping_history_repository_copy_1 = require("../../shared/database/repositories/shopping_history.repository copy");
let ShoppingHistoryService = class ShoppingHistoryService {
    constructor(shoppingHistoryRepository) {
        this.shoppingHistoryRepository = shoppingHistoryRepository;
    }
    async create(createShoppingHistoryDto, userId) {
        const { totalPrice, products } = createShoppingHistoryDto;
        const data = await this.shoppingHistoryRepository.create({
            data: {
                userId,
                totalPrice,
                products: JSON.parse(JSON.stringify(products)),
            },
        });
        console.log('🚀 ~ ShoppingHistoryService ~ create ~ data:', data);
        return data;
    }
    async findByUser(userId) {
        return await this.shoppingHistoryRepository.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
        });
    }
    findOne(id) {
        return `This action returns a #${id} shoppingHistory`;
    }
    remove(id) {
        return `This action removes a #${id} shoppingHistory`;
    }
};
exports.ShoppingHistoryService = ShoppingHistoryService;
exports.ShoppingHistoryService = ShoppingHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [shopping_history_repository_copy_1.ShoppingHistoryRepository])
], ShoppingHistoryService);
//# sourceMappingURL=shopping_history.service.js.map
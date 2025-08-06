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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("../../shared/database/repositories/products.repository");
let ProductsService = class ProductsService {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async create(createProductDto) {
        const { category, description, imageUrl, name, price } = createProductDto;
        return await this.productsRepository.createMany({
            data: [
                {
                    name: 'Tênis Adidas Run Falcon',
                    description: 'Tênis confortável para treinos e uso casual.',
                    category: 'Calçados',
                    imageUrl: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/7c5e1f0b49c24ff5b44ead45016fcd2a_9366/Tenis_Adidas_Run_Falcon_2.0_Preto_FW5159_01_standard.jpg',
                    price: 259.9,
                },
                {
                    name: 'Camisa Polo Masculina',
                    description: 'Camisa polo clássica de algodão, elegante e confortável.',
                    category: 'Roupas',
                    imageUrl: 'https://static.zattini.com.br/produtos/camisa-polo-masculina/02/D65-0015-002/D65-0015-002_zoom1.jpg',
                    price: 79.9,
                },
                {
                    name: 'Calça Jeans Slim Fit',
                    description: 'Calça jeans com corte moderno e confortável.',
                    category: 'Roupas',
                    imageUrl: 'https://static.zattini.com.br/produtos/calca-jeans-slim-fit/24/D64-0380-024/D64-0380-024_zoom1.jpg',
                    price: 119.9,
                },
                {
                    name: 'Sandália Feminina Rasteira',
                    description: 'Sandália leve e estilosa para dias quentes.',
                    category: 'Calçados',
                    imageUrl: 'https://static.dafiti.com.br/p/Moleca-Sandália-Moleca-Rasteira-Feminina-Dourada-1547-5116011-1-zoom.jpg',
                    price: 69.9,
                },
                {
                    name: 'Headset Gamer Redragon',
                    description: 'Headset com som surround e microfone ajustável.',
                    category: 'Eletrônicos',
                    imageUrl: 'https://m.media-amazon.com/images/I/71woCuWHHBL._AC_SL1500_.jpg',
                    price: 199.9,
                },
                {
                    name: 'Notebook Lenovo IdeaPad 3',
                    description: 'Notebook leve e potente para uso diário.',
                    category: 'Eletrônicos',
                    imageUrl: 'https://m.media-amazon.com/images/I/71Nbi5SOf6L._AC_SL1500_.jpg',
                    price: 2999.0,
                },
                {
                    name: 'Camiseta Básica Branca',
                    description: 'Camiseta básica de algodão, essencial para o dia a dia.',
                    category: 'Roupas',
                    imageUrl: 'https://static.zattini.com.br/produtos/camiseta-basica-branca/14/D63-0610-014/D63-0610-014_zoom1.jpg',
                    price: 39.9,
                },
                {
                    name: 'Tênis Puma Smash V2',
                    description: 'Tênis casual com design moderno e confortável.',
                    category: 'Calçados',
                    imageUrl: 'https://static.puma.com.br/produtos/tenis-puma-smash-v2/30/D65-2757-030/D65-2757-030_zoom1.jpg',
                    price: 229.9,
                },
                {
                    name: 'Fone de Ouvido Bluetooth Sony',
                    description: 'Fone sem fio com cancelamento de ruído e som de alta qualidade.',
                    category: 'Eletrônicos',
                    imageUrl: 'https://m.media-amazon.com/images/I/71f5Eu5lJQL._AC_SL1500_.jpg',
                    price: 499.0,
                },
                {
                    name: 'Bolsa Tote Grande',
                    description: 'Bolsa espaçosa e elegante para uso diário.',
                    category: 'Acessórios',
                    imageUrl: 'https://static.dafiti.com.br/p/Michael-Kors-Bolsa-Michael-Kors-Tote-Preta-9176-7267246-1-zoom.jpg',
                    price: 249.9,
                },
                {
                    name: 'Jaqueta Jeans Oversized',
                    description: 'Jaqueta jeans estilosa com modelagem ampla.',
                    category: 'Roupas',
                    imageUrl: 'https://static.zattini.com.br/produtos/jaqueta-jeans-oversized/18/D63-0314-018/D63-0314-018_zoom1.jpg',
                    price: 219.9,
                },
                {
                    name: 'Carteira Couro Masculina',
                    description: 'Carteira compacta de couro legítimo com divisórias.',
                    category: 'Acessórios',
                    imageUrl: 'https://static.dafiti.com.br/p/Chenson-Carteira-Chenson-Masculina-Preta-4414-9875741-1-zoom.jpg',
                    price: 89.9,
                },
                {
                    name: 'Tênis Converse All Star',
                    description: 'Tênis clássico e versátil para todas as ocasiões.',
                    category: 'Calçados',
                    imageUrl: 'https://static.zattini.com.br/produtos/converse-all-star-cano-baixo/34/D26-5111-034/D26-5111-034_zoom1.jpg',
                    price: 199.9,
                },
                {
                    name: 'Vestido Midi Listrado',
                    description: 'Vestido midi casual com estampa listrada.',
                    category: 'Roupas',
                    imageUrl: 'https://static.dafiti.com.br/p/Linza-Vestido-Linza-Midi-Listrado-Colorido-1964-2017411-1-zoom.jpg',
                    price: 149.9,
                },
                {
                    name: 'Chinelo Havaianas Top',
                    description: 'Chinelo clássico confortável e durável.',
                    category: 'Calçados',
                    imageUrl: 'https://m.media-amazon.com/images/I/51kzYXN0t8L._AC_UL1500_.jpg',
                    price: 29.9,
                },
                {
                    name: 'Smartphone Samsung Galaxy A14',
                    description: 'Celular com ótima performance e câmera de alta resolução.',
                    category: 'Eletrônicos',
                    imageUrl: 'https://m.media-amazon.com/images/I/81JeLQ0dGZL._AC_SL1500_.jpg',
                    price: 1299.0,
                },
                {
                    name: 'Boné Trucker Preto',
                    description: 'Boné trucker ajustável para estilo casual.',
                    category: 'Acessórios',
                    imageUrl: 'https://static.zattini.com.br/produtos/bone-trucker-preto/20/D65-0378-020/D65-0378-020_zoom1.jpg',
                    price: 79.9,
                },
                {
                    name: 'Pulseira Masculina Couro',
                    description: 'Pulseira de couro ajustável com fecho metálico.',
                    category: 'Acessórios',
                    imageUrl: 'https://static.dafiti.com.br/p/Masculine-Pulseira-Masculine-Couro-Marrom-0153-4628845-1-zoom.jpg',
                    price: 59.9,
                },
                {
                    name: 'Tênis Vans Old Skool',
                    description: 'Tênis casual com design clássico e versátil.',
                    category: 'Calçados',
                    imageUrl: 'https://static.zattini.com.br/produtos/tenis-vans-old-skool/34/D26-4311-034/D26-4311-034_zoom1.jpg',
                    price: 299.9,
                },
                {
                    name: 'Cropped Feminino Branco',
                    description: 'Cropped básico e confortável para looks casuais.',
                    category: 'Roupas',
                    imageUrl: 'https://static.zattini.com.br/produtos/cropped-feminino-branco/18/D63-0613-018/D63-0613-018_zoom1.jpg',
                    price: 49.9,
                },
                {
                    name: 'Relógio Fossil Chronograph',
                    description: 'Relógio elegante com cronógrafo e pulseira de couro.',
                    category: 'Acessórios',
                    imageUrl: 'https://m.media-amazon.com/images/I/81oOrFVF7EL._AC_SL1500_.jpg',
                    price: 699.0,
                },
                {
                    name: 'Smart TV LG 50" 4K',
                    description: 'Televisão 4K com sistema webOS e controle por voz.',
                    category: 'Eletrônicos',
                    imageUrl: 'https://m.media-amazon.com/images/I/81XQ9z79utL._AC_SL1500_.jpg',
                    price: 2499.0,
                },
                {
                    name: 'Tênis Asics Gel-Nimbus',
                    description: 'Tênis de corrida com excelente amortecimento.',
                    category: 'Calçados',
                    imageUrl: 'https://static.asics.com.br/produtos/tenis-asics-gel-nimbus/40/D65-1327-040/D65-1327-040_zoom1.jpg',
                    price: 599.9,
                },
                {
                    name: 'Saia Midi Plissada',
                    description: 'Saia elegante com modelagem midi plissada.',
                    category: 'Roupas',
                    imageUrl: 'https://static.zattini.com.br/produtos/saia-midi-plissada/22/D63-0619-022/D63-0619-022_zoom1.jpg',
                    price: 109.9,
                },
            ],
        });
    }
    async findMany(page, limit, category) {
        const skip = (page - 1) * limit;
        const take = limit;
        const [items, total] = await Promise.all([
            this.productsRepository.findMany({
                skip,
                take,
                where: {
                    category,
                },
            }),
            this.productsRepository.count({}),
        ]);
        const maxProductPrice = Math.max(...items.map((p) => Number(p.price)), 1000);
        return {
            products: items,
            maxProductPrice,
            pagination: {
                total,
                page,
                lastPage: Math.ceil(total / limit),
            },
        };
    }
    async findByCategory(category) {
        return await this.productsRepository.findMany({
            where: {
                category,
            },
        });
    }
    async findById(id) {
        return await this.productsRepository.findFirst({
            where: {
                id,
            },
        });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [products_repository_1.ProductsRepository])
], ProductsService);
//# sourceMappingURL=products.service.js.map
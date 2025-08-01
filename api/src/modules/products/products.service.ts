import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsRepository } from 'src/shared/database/repositories/products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}
  async create(createProductDto: CreateProductDto) {
    const { category, description, imageUrl, name, price } = createProductDto;

    return await this.productsRepository.createMany({
      data: [
        {
          name: 'Camiseta Oversized Preta',
          description:
            'Camiseta confortável de algodão, ideal para o dia a dia.',
          category: 'Roupas',
          imageUrl:
            'https://static.zattini.com.br/produtos/camiseta-oversized-preta/06/D61-0627-006/D61-0627-006_zoom1.jpg',
          price: 59.9,
        },
        {
          name: 'Tênis Nike Revolution',
          description: 'Tênis leve e resistente para corridas e caminhadas.',
          category: 'Calçados',
          imageUrl:
            'https://static.nike.com/a/images/t_default/189d824e-9026-4d2b-ae26-2f0a4ed50f35/revolution-6-next-nature-road-running-shoes-KlpRLC.png',
          price: 279.9,
        },
        {
          name: 'Relógio Casio Vintage',
          description: 'Relógio digital clássico com alarme e iluminação.',
          category: 'Acessórios',
          imageUrl:
            'https://m.media-amazon.com/images/I/71+O-j0GJLL._AC_UX679_.jpg',
          price: 169.0,
        },
        {
          name: 'Calça Jogger Moletom',
          description: 'Calça jogger unissex, ideal para momentos casuais.',
          category: 'Roupas',
          imageUrl:
            'https://static.zattini.com.br/produtos/calca-jogger-moletom/08/D63-0054-008/D63-0054-008_zoom1.jpg',
          price: 89.9,
        },
        {
          name: 'Mochila Adidas Classic',
          description: 'Mochila resistente com compartimento para notebook.',
          category: 'Acessórios',
          imageUrl:
            'https://assets.adidas.com/images/w_600,f_auto,q_auto/0eb00c62d39e4d658310af8e015a96ce_9366/Mochila_Adidas_Classic_Preto_EX6926_01_standard.jpg',
          price: 139.9,
        },
        {
          name: 'Fone de Ouvido JBL Tune 510BT',
          description:
            'Fone sem fio com bateria de longa duração e graves potentes.',
          category: 'Eletrônicos',
          imageUrl:
            'https://m.media-amazon.com/images/I/71g+6GzQWqL._AC_SL1500_.jpg',
          price: 219.0,
        },
        {
          name: 'Smartwatch Amazfit Bip U',
          description: 'Relógio inteligente com monitoramento de saúde e GPS.',
          category: 'Eletrônicos',
          imageUrl:
            'https://m.media-amazon.com/images/I/61PFX9OsQ8L._AC_SL1500_.jpg',
          price: 349.0,
        },
        {
          name: 'Vestido Floral Curto',
          description: 'Vestido leve com estampa floral, ideal para o verão.',
          category: 'Roupas',
          imageUrl:
            'https://static.dafiti.com.br/p/Violeta-by-Mango-Vestido-Violeta-by-Mango-Curto-Floral-Preto-7464-9012411-1-zoom.jpg',
          price: 129.9,
        },
        {
          name: 'Boné Nike Aba Curva',
          description:
            'Boné clássico com logo bordado, ideal para esportes e casual.',
          category: 'Acessórios',
          imageUrl:
            'https://static.nike.com/a/images/t_default/26f94b53-58cf-45de-8f69-8cd6bc5d715e/heritage86-futura-washed-hat-JSVt11.png',
          price: 99.9,
        },
        {
          name: 'Bolsa Feminina Tiracolo',
          description: 'Bolsa compacta e elegante para ocasiões especiais.',
          category: 'Acessórios',
          imageUrl:
            'https://static.dafiti.com.br/p/Colcci-Bolsa-Colcci-Tiracolo-Canoa-Preta-2583-9485206-1-zoom.jpg',
          price: 159.0,
        },
        {
          name: 'Jaqueta Corta Vento Unissex',
          description: 'Jaqueta leve e resistente à água com capuz embutido.',
          category: 'Roupas',
          imageUrl:
            'https://static.nike.com/a/images/t_default/76827bd0-c367-474f-a262-7fa30242a097/sportswear-windrunner-mens-hooded-windbreaker-jacket-q4g5xF.png',
          price: 249.9,
        },
        {
          name: 'Óculos de Sol Ray-Ban',
          description: 'Óculos de sol com proteção UV400 e design clássico.',
          category: 'Acessórios',
          imageUrl:
            'https://m.media-amazon.com/images/I/51k5S57idUL._AC_SL1500_.jpg',
          price: 399.0,
        },
      ],
    });
  }
  async findMany() {
    return await this.productsRepository.findMany({});
  }

  async findByCategory(category: string) {
    return await this.productsRepository.findMany({
      where: {
        category,
      },
    });
  }
}

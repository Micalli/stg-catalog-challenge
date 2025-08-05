import { IsArray, IsNumber, ValidateNested, IsString } from 'class-validator';
import { Type } from 'class-transformer';

class ProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;
}

export class CreateShoppingHistoryDto {
  @IsNumber()
  totalPrice: number;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProductDto)
  products: ProductDto[];
}

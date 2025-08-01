import { IsString, IsNumber, IsPositive, IsNotEmpty } from 'class-validator';

export class CreateCartItemDto {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  userId: string;
}

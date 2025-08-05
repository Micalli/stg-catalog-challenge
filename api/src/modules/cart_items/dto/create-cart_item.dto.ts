import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCartItemDto {
  @IsString()
  @IsNotEmpty()
  productId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}

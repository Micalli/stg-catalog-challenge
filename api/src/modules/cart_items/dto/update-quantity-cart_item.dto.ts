import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateQuantityCartItemDto {
  @IsNotEmpty()
  @IsNumber()
  newQuantity: number;
}

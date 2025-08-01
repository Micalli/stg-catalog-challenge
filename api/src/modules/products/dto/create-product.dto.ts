import {
  IsString,
  IsNumber,
  IsPositive,
  IsNotEmpty,
  IsUrl,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsString()
  @IsUrl()
  imageUrl: string;

  @IsString()
  @IsNotEmpty()
  category: string;
}

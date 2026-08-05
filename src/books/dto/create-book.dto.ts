import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsPositive, IsString, Min } from 'class-validator';

export class CreateBookDto {
  @ApiProperty({ description: 'Title of the book', example: 'Clean Architecture' })
  @IsString()
  @IsNotEmpty()
  readonly title!: string;

  @ApiProperty({ description: 'Author of the book', example: 'Robert C. Martin' })
  @IsString()
  @IsNotEmpty()
  readonly author!: string;

  @ApiProperty({ description: 'Category of the book', example: 'Programming' })
  @IsString()
  @IsNotEmpty()
  readonly category!: string;

  @ApiProperty({ description: 'Price of the book', example: 49.99 })
  @IsNumber()
  @IsPositive()
  readonly price!: number;

  @ApiProperty({ description: 'Quantity available in inventory', example: 5 })
  @IsNumber()
  @Min(1)
  readonly quantity!: number;

  @ApiProperty({ description: 'Published year of the book', example: 2020 })
  @IsNumber()
  readonly publishedYear!: number;
}

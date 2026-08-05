import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './interfaces/book.interface';

@ApiTags('Books')
@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new book' })
  @ApiBody({ type: CreateBookDto })
  @ApiResponse({ status: 201, description: 'Book created successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid request data.' })
  create(@Body() createBookDto: CreateBookDto): Book {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all books or search by category' })
  @ApiQuery({ name: 'category', required: false, description: 'Filter books by category' })
  @ApiResponse({ status: 200, description: 'Books retrieved successfully.' })
  findAll(@Query('category') category?: string): Book[] {
    return this.booksService.findAll(category);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a book by its ID' })
  @ApiParam({ name: 'id', description: 'UUID of the book' })
  @ApiResponse({ status: 200, description: 'Book retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Book not found.' })
  findOne(@Param('id') id: string): Book {
    return this.booksService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a book by its ID' })
  @ApiParam({ name: 'id', description: 'UUID of the book' })
  @ApiBody({ type: CreateBookDto })
  @ApiResponse({ status: 200, description: 'Book updated successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid request data.' })
  @ApiResponse({ status: 404, description: 'Book not found.' })
  update(@Param('id') id: string, @Body() updateBookDto: CreateBookDto): Book {
    return this.booksService.update(id, updateBookDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a book by its ID' })
  @ApiParam({ name: 'id', description: 'UUID of the book' })
  @ApiResponse({ status: 200, description: 'Book deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Book not found.' })
  remove(@Param('id') id: string): { message: string } {
    this.booksService.remove(id);
    return { message: 'Book deleted successfully' };
  }
}

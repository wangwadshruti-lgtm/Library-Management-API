import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
  private readonly books: Book[] = [];

  create(createBookDto: CreateBookDto): Book {
    const now = new Date().toISOString();
    const book: Book = {
      id: uuidv4(),
      title: createBookDto.title,
      author: createBookDto.author,
      category: createBookDto.category,
      price: createBookDto.price,
      quantity: createBookDto.quantity,
      publishedYear: createBookDto.publishedYear,
      createdAt: now,
      updatedAt: now,
    };

    this.books.push(book);
    return book;
  }

  findAll(category?: string): Book[] {
    if (category) {
      return this.books.filter(
        (book) => book.category.toLowerCase() === category.toLowerCase(),
      );
    }

    return [...this.books];
  }

  findOne(id: string): Book {
    const book = this.books.find((item) => item.id === id);
    if (!book) {
      throw new NotFoundException('Book not found');
    }
    return book;
  }

  update(id: string, updateBookDto: Partial<CreateBookDto>): Book {
    const book = this.findOne(id);
    const updatedBook: Book = {
      ...book,
      ...updateBookDto,
      updatedAt: new Date().toISOString(),
    };

    const index = this.books.findIndex((item) => item.id === id);
    this.books[index] = updatedBook;
    return updatedBook;
  }

  remove(id: string): void {
    const index = this.books.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException('Book not found');
    }

    this.books.splice(index, 1);
  }
}

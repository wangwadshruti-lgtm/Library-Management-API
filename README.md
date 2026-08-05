# Library Management API

Enterprise-grade Library Management API built with NestJS and TypeScript. This API manages books using an in-memory store and provides complete Swagger documentation.

## Features

- Book creation, retrieval, update, and deletion
- Search books by category
- Global validation with class-validator and class-transformer
- Swagger documentation available at `/api`
- Environment configuration using `@nestjs/config`
- Production-ready folder structure and clean architecture

## Tech Stack

- NestJS
- TypeScript
- class-validator
- class-transformer
- Swagger
- UUID
- In-memory data storage

## Installation

```bash
npm install
```

## Environment

Create an `.env.development` or `.env.production` file at the project root.

Example values are already provided:

```env
PORT=3000
APP_NAME=Library Management API
LIBRARY_NAME=Enterprise Library
API_VERSION=1.0
```

## Run the application

```bash
npm run start:dev
```

Swagger documentation will be available at:

```
http://localhost:3000/api
```

## API Endpoints

- `POST /books`
- `GET /books`
- `GET /books/:id`
- `GET /books?category=Programming`
- `PUT /books/:id`
- `DELETE /books/:id`
- `GET /config`

## Validation Rules

- `title`: required string
- `author`: required string
- `category`: required string
- `price`: number greater than 0
- `quantity`: number minimum 1
- `publishedYear`: number

## Sample Requests

Create a book:

```bash
curl -X POST http://localhost:3000/books \
  -H "Content-Type: application/json" \
  -d '{"title":"Clean Architecture","author":"Robert C. Martin","category":"Programming","price":49.99,"quantity":5,"publishedYear":2017}'
```

Get all books:

```bash
curl http://localhost:3000/books
```

Get a book by ID:

```bash
curl http://localhost:3000/books/<book-id>
```

Search books by category:

```bash
curl http://localhost:3000/books?category=Programming
```

Update a book:

```bash
curl -X PUT http://localhost:3000/books/<book-id> \
  -H "Content-Type: application/json" \
  -d '{"title":"Clean Architecture","author":"Robert C. Martin","category":"Programming","price":55.0,"quantity":3,"publishedYear":2017}'
```

Delete a book:

```bash
curl -X DELETE http://localhost:3000/books/<book-id>
```

Get config values:

```bash
curl http://localhost:3000/config
```

## Sample Responses

### Create Book

```json
{
  "id": "...",
  "title": "Clean Architecture",
  "author": "Robert C. Martin",
  "category": "Programming",
  "price": 49.99,
  "quantity": 5,
  "publishedYear": 2017,
  "createdAt": "2026-08-05T00:00:00.000Z",
  "updatedAt": "2026-08-05T00:00:00.000Z"
}
```

### Validation Error

```json
{
  "statusCode": 400,
  "message": [
    "price must be a positive number"
  ],
  "error": "Bad Request"
}
```

### Not Found

```json
{
  "statusCode": 404,
  "message": "Book not found",
  "error": "Not Found"
}
```

## GitHub Push Commands

```bash
git init
git add .
git commit -m "chore: initial library management API implementation"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

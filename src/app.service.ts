import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatus(): { status: string } {
    return { status: 'Library Management API is operational' };
  }
}

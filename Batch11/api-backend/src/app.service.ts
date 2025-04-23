import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAbout(): string {
    return 'This is a simple NestJS application.';
  }
}

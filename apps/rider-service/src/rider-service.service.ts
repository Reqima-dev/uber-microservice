import { Injectable } from '@nestjs/common';

@Injectable()
export class RiderServiceService {
  getHello(): string {
    return 'Hello World! This is the Rider Service API.';
  }
}

import { Controller } from '@nestjs/common';
import { RiderService } from './rider.service';
import { MessagePattern } from '@nestjs/microservices';
export interface RiderParams {
  id: string;
}
@Controller('rider')
export class RiderController {
  constructor(private readonly riderService: RiderService) {}

  // @Get(':id')
  @MessagePattern({ cmd: 'get-rider' })
  async getRiderById(data: RiderParams) {
    return Promise.resolve({
      _id: data.id,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
    });
  }
}

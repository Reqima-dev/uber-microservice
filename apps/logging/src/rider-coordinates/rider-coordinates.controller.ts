import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  @Get()
  getRiderCoordinates() {
    return 'Hello World! This is the Rider Coordinates API.';
  }
  @Post()
  saveRiderCoordinates(
    @Body()
    createCoordinateDto: CreateCoordinatesDto,
  ) {
    return {
      message: 'Coordinates saved successfully',
      data: createCoordinateDto,
    };
  }
}

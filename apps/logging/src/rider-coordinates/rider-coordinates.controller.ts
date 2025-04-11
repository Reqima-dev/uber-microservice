import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private coordinatesService: RiderCoordinatesService) {}
  @Get()
  getRiderCoordinates() {
    return 'Hello World! This is the Rider Coordinates API.';
  }
  @Post()
  async saveRiderCoordinates(
    @Body()
    createCoordinateDto: CreateCoordinatesDto,
  ) {
    return this.coordinatesService.saveRiderCoordinates(createCoordinateDto);
  }
}

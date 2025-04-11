import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private coordinatesService: RiderCoordinatesService) {}
  @Get()
  async getRiderCoordinates() {
    return this.coordinatesService.getRiderCoordinates();
  }
  @Post()
  async saveRiderCoordinates(
    @Body()
    createCoordinateDto: CreateCoordinatesDto,
  ) {
    return this.coordinatesService.saveRiderCoordinates(createCoordinateDto);
  }
}

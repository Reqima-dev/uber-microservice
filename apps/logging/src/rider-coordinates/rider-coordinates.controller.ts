import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { RiderParams } from 'apps/rider/src/rider.controller';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
  constructor(private coordinatesService: RiderCoordinatesService) {}
  @Get(':id')
  async getRiderCoordinates(
    @Param()
    params: RiderParams,
  ) {
    return this.coordinatesService.getRiderCoordinates(params.id);
  }
  @Post()
  async saveRiderCoordinates(
    @Body()
    createCoordinateDto: CreateCoordinatesDto,
  ) {
    return this.coordinatesService.saveRiderCoordinates(createCoordinateDto);
  }
}

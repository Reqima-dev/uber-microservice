import { Injectable } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private readonly riderCoordinatesModel: Model<RiderCoordinate>,
  ) {}
  async getRiderCoordinates() {
    return await this.riderCoordinatesModel.find();
  }
  async saveRiderCoordinates(createCoordinateDto: CreateCoordinatesDto) {
    return await this.riderCoordinatesModel.create(createCoordinateDto);
  }
}

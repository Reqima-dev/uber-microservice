import { Inject, Injectable } from '@nestjs/common';
import { CreateCoordinatesDto } from './dto/create-coordinates.dto';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {
  constructor(
    @InjectModel(RiderCoordinate.name)
    private readonly riderCoordinatesModel: Model<RiderCoordinate>,
    @Inject('RIDER_SERIVCE') private client: ClientProxy,
  ) {}
  async getRiderCoordinates(riderId: string) {
    try {
      const coordinates = await this.riderCoordinatesModel.find({
        rider: riderId,
      });
       const pattern = { cmd: 'get-rider' };
      const payload = { id: riderId };
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const rider = await firstValueFrom(this.client.send(pattern, payload));
       return {
        coordinates,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        rider,
      };
    } catch (error) {
      console.log('🚀 ~ getRiderCoordinates ~ error:', error);
      throw new Error(error);
    }
  }
  async saveRiderCoordinates(createCoordinateDto: CreateCoordinatesDto) {
    return await this.riderCoordinatesModel.create(createCoordinateDto);
  }
}

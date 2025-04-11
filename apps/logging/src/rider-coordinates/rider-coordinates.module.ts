import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller';
import { RiderCoordinatesService } from './rider-coordinates.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  RiderCoordinate,
  RiderCoordinatesSchema,
} from './schemas/rider-coordinates.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: RiderCoordinate.name,
        schema: RiderCoordinatesSchema,
      },
    ]),
    ClientsModule.register([
      {
        name: 'RIDER_SERIVCE',
        transport: Transport.TCP,
      },
    ]),
  ],
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService],
})
export class RiderCoordinatesModule {}

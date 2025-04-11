import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type RiderCoordinatesDocument = HydratedDocument<RiderCoordinate>;
@Schema()
export class RiderCoordinate {
  @Prop({ required: true })
  lat: number;

  @Prop({ required: true })
  long: number;

  @Prop({ required: true })
  rider: string;
}

export const RiderCoordinatesSchema =
  SchemaFactory.createForClass(RiderCoordinate);

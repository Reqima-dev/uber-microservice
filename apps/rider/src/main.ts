import { NestFactory } from '@nestjs/core';
import { RiderModule } from './rider.module';

async function bootstrap() {
  const app = await NestFactory.create(RiderModule);
  await app.listen(process.env.port ?? 5002);
}
bootstrap();

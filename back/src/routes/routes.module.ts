import { Module } from '@nestjs/common';
import { RoutesController } from './routes.controller';
import { RoutesService } from './routes.service';
import { MapsModule } from 'src/maps/maps.module';
import { RoutesDriverService } from './routes-driver/routes-driver.service';
import { RoutesDriverGateway } from './routes-driver/routes-driver.gateway';
import { KafkaModule } from 'src/kafka/kafka.module';
import { RoutesConsumer } from './routes.consumer';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [MapsModule, KafkaModule, HttpModule],
  controllers: [RoutesController, RoutesConsumer],
  providers: [RoutesService, RoutesDriverService, RoutesDriverGateway],
})
export class RoutesModule {}

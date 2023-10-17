import { Module } from '@nestjs/common';

import { PlantsModule } from './plants/plants.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [PlantsModule, OrdersModule],
})
export class AppModule {}

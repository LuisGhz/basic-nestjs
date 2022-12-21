import { Module } from '@nestjs/common';
import { AppService } from './app.service';

// Controllers
import { AppController } from './app.controller';
import { ProductsController } from './controllers/products/products.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}

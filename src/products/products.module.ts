import { Module } from '@nestjs/common';

// Controllers
import { BrandsController } from './controllers/brands.controller';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';

// Services
import { BrandsService } from './services/brand.service';
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service';

@Module({
  controllers: [BrandsController, CategoriesController, ProductsController],
  providers: [BrandsService, CategoriesService, ProductsService],
})
export class ProductsModule {}

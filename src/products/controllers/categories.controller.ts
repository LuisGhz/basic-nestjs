import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';

@Controller('categories')
export class CategoriesController {
  @Get('/:id/products/:productId')
  getCategories(
    @Param('id') id: string,
    @Param('productId') productId: string,
  ) {
    return `Category: ${id}, product: ${productId}`;
  }
}

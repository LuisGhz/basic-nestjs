import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  // @Get('list')
  // getProducts(@Query() params: any) {
  //   const { limit, offset = 0 } = params;
  //   return `limit: ${limit}, offset: ${offset}`;
  // }
  @Get('list')
  getProducts(@Query('limit') limit: number, @Query('offset') offset = 0) {
    return `limit: ${limit}, offset: ${offset}`;
  }
  @Get('/:id')
  getProduct(@Param() params: any) {
    return `Product: ${params.id}`;
  }
  // @Get('/:id')
  // getProduct(@Param('id') id: string) {
  //   return `Product: ${id}`
  // }
}

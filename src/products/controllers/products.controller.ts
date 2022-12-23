import {
  Controller,
  Get,
  Param,
  Query,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import {
  Delete,
  Post,
  Put,
} from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';

import { Response } from 'express';
import { Product } from '../entities/product.entity';
import { ProductsService } from 'src/products/services/products.service';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import {
  CreateProductDto,
  UpdateProductDto,
} from 'src/products/dtos/products.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private _productsService: ProductsService) {}
  // @Get('list')
  // getMany(@Query() params: any) {
  //   const { limit, offset = 0 } = params;
  //   return `limit: ${limit}, offset: ${offset}`;
  // }
  @Get('list')
  @ApiQuery({
    name: 'offset',
    required: false,
    type: 'number',
  })
  getMany(
    @Query('limit', ParseIntPipe) limit: number,
    @Query('offset', ParseIntPipe) offset = 0,
  ) {
    // response.status(202).send({
    //   limit,
    //   offset,
    // });
    console.log(limit);
    console.log(offset);
    return this._productsService.findAll();
  }
  @Get('/:id')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('id', ParseIntPipe) id: number) {
    // return `Product: ${id}`;
    return this._productsService.findOne(id);
  }
  // @Get('/:id')
  // getOne(@Res() response: Response, @Param('id') id: string) {
  //   response.status(200).send({
  //     message: `Product: ${id}`,
  //   });
  // }
  @Post()
  create(@Body() payload: CreateProductDto) {
    const newProduct = this._productsService.create(payload);
    return {
      message: 'Created',
      payload: {
        ...newProduct,
      },
    };
  }
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this._productsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    this._productsService.delete(id);
    return true;
  }
}

import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands(): string {
    return 'Get Brands';
  }
}

import {
  Controller,
  Delete,
  Get,
  HttpException,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';
import { SuccessInterceptor } from '../common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats() {
    // throw new HttpException('API is broken', 401);
    return {cats: 'all cats'};
  }

  @Get('/:id')
  getCatById() {
    return 'one cat';
  }

  @Post('')
  createCat() {
    return 'create cat';
  }

  @Put('/:id')
  updateCatById() {
    return 'one cat';
  }

  @Patch('/:id')
  patchCatById() {
    return 'one cat';
  }

  @Delete('/:id')
  deleteCatById() {
    return 'one cat';
  }
}

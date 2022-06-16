import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root(): object {
    return {
      data: {
        title: 'chattings',
        version: '1.0.0',
      },
    };
  }
}

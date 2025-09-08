import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello() {
    return { message: '🚀 Backend running! Use /api/dashboard/* endpoints.' };
  }
}

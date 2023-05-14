import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalGuard } from '@app/common/auth/guards/local.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalGuard)
  @Post('login')
  login(@Request() req): string {
    return req.user;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { LocalGuard } from '@app/common/auth/guards/local.guard';
import { JwtGuard } from '@app/common/auth/guards/jwt-guard';
import { AuthService } from '@app/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtGuard)
  @Get('me')
  me(@Request() req): string {
    return req.user;
  }
}

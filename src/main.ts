import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  const appName = config.get('app.name');
  const port = config.get('app.port');

  await app.listen(port);
  console.log(`The ${appName} listening at port ${port}`);
}

bootstrap();

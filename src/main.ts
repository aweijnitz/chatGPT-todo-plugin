import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 3333;

async function bootstrap() {
  console.log('Starting on localhost:'+port)
  const app = await NestFactory.create(AppModule, {
    logger: ['verbose'], // 'log', 'error', 'warn', 'debug', and 'verbose'.
  });
  await app.listen(port);
}
bootstrap();

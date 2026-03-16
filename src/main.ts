import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Helmet Security
  app.use(helmet());
  // Enable CORS
  app.enableCors({
    origin: process.env.ORIGIN_URI,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(4000);
}

void bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const serverPort = process.env.SERVER_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(serverPort, () => {
    console.info(`Server start on http://localhost:${serverPort}`)
  });
}
bootstrap();

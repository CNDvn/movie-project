import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { PostgresqlModule } from './providers';

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], isGlobal: true }),
    PostgresqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

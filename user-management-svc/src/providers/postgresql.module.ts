import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IEnvConfiguration } from 'src/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: ({
        internalConfig,
      }: {
        internalConfig: IEnvConfiguration;
      }) => {
        const { host, port, username, password, dbName } =
          internalConfig.database.postgres;
        return {
          type: 'postgres',
          host: host,
          port: port,
          username: username,
          password: password,
          database: dbName,
          entities: ['dist/**/*.entity.{ts,js}'],
          synchronize: false,
          logging: false,
          autoLoadEntities: true,
        };
      },
    }),
  ],
})
export class PostgresqlModule {}

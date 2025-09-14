import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import conf from './config/conf';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [conf],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        url:
          process.env.DATABASE_URL ||
          `postgresql://${config.get<string>('database.username')}:${config.get<string>(
            'database.password',
          )}@${config.get<string>('database.host')}:${config.get<number>(
            'database.port',
          )}/${config.get<string>('database.database')}`,
        autoLoadEntities: true,
        synchronize: true, // dev only, turn off in prod
        ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false, // SSL only for Render
      }),
    }),
    DashboardModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

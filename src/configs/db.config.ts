import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export async function getDBConfig(
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> {
  return {
    type: 'postgres',
    host: configService.get('DATABASE_HOST'),
    port: configService.get('DATABASE_PORT'),
    username: configService.get('DATABASE_USER'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_NAME'),
    synchronize: true,
    autoLoadEntities: true,
    logging: true,
  };
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LookupModule } from './lookup/lookup.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LookupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

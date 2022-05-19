import { Module } from '@nestjs/common';
import { LookupService } from './lookup.service';
import { LookupController } from './lookup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lookup } from './lookup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lookup])],
  providers: [LookupService],
  controllers: [LookupController],
})
export class LookupModule {}

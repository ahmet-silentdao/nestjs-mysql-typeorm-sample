import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
import { Lookup } from './lookup.entity';
import { LookupService } from './lookup.service';

@Controller('lookup')
export class LookupController {
  constructor(private lookupService: LookupService) {}

  @Get()
  findAll() {
    return this.lookupService.getAll();
  }

  @Get(':exponent')
  findOne(
    @Param('exponent')
    exponent,
  ) {
    return this.lookupService.findOne(exponent);
  }
}

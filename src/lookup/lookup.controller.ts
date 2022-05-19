import {
  Controller,
  Get,
  Param,
} from '@nestjs/common';
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
    var exponentInput: string = exponent
      return this.lookupService.findOne(exponentInput);
  }
  
}

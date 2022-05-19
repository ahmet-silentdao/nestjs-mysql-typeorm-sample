import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lookup } from './lookup.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LookupService {
  constructor(
    @InjectRepository(Lookup) private LookupRepository: Repository<Lookup>,
  ) {}

  getAll(): Promise<Lookup[]> {
    return this.LookupRepository.find();
  }

  findOne(exponentInput: string) {
    const exponent = this.LookupRepository.findOne({
      where: {
        exponent: exponentInput,
      },
    });

    return exponent;
  }
}

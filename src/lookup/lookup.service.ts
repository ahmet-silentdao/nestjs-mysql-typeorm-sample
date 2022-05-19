import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomLookupRepository } from './lookup.repository';
import { Lookup } from './lookup.entity';
import { getCustomRepository } from 'typeorm';
import {EntityRepository, Repository} from "typeorm";

//const customRepository = getCustomRepository(CustomLookupRepository); // or connection.getCustomRepository or manager.getCustomRepository()

@Injectable()
export class LookupService {
  constructor(
    @InjectRepository(Lookup) private LookupRepository: Repository<Lookup>,
    //@InjectRepository(Lookup) private CustomLookupRepository: CustomLookupRepository<Lookup>,

    //private lookupRepository = getCustomRepository(LookupRepository),
    //private lookupRepository = LookupRepository
  ) {}


  getAll(): Promise<Lookup[]> {

    return this.LookupRepository.find();
  }

  findOne(exponent: string){
    //const lookupRepository = getCustomRepository(lookupRepository); // or connection.getCustomRepository or manager.getCustomRepository()
   // return this.CustomLookupRepository.findByIndex(exponent);
    
   this.LookupRepository.find({
    where: {
        exponent: true,
    },
})
   
   return this.LookupRepository.findOne(exponent);

  }
}

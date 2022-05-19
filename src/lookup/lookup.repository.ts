import {EntityRepository, Repository} from "typeorm";
import {Lookup} from "./lookup.entity";

@EntityRepository(Lookup)
export class CustomLookupRepository extends Repository<Lookup> {

    findByIndex(exponent: string) {
        return this.findOne({ exponent });
    }
}
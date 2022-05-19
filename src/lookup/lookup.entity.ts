import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Lookup {
  @PrimaryColumn()
  index: number;
  @Column()
  exponent: string;
}

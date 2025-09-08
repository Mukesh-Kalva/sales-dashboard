import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("revenue")
export class Revenue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  month: string;

  @Column()
  value: number;
}

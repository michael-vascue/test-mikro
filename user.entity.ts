import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Company } from "./company.entity";

@Entity()
export class User {
    @PrimaryKey()
    id!: number;
    
    @Property({ length: 200 })
    name!: string;

    @ManyToOne(() => Company)
    company: Company;
} 
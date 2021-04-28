import { Collection, Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { User } from "./user.entity";

@Entity()
export class Company {
    @PrimaryKey()
    id!: number;

    @Property({ length: 200 })
    name!: string;

    @OneToMany(() => User, (u) => u.company)
    users = new Collection<User>(this);
}


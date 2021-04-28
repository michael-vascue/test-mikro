import { EntityRepository, LoadStrategy, MikroORM } from "@mikro-orm/core";
import { User } from "./user.entity";

(async () => {
  const orm = await MikroORM.init();
  const userRepository = orm.em.getRepository(User);
  await getUsersDotFields(userRepository);
  await getUsersObjectFields(userRepository);
})();

/**
 * Joining-side's fields are all retrieved
 */
const getUsersDotFields = async (userRepository: EntityRepository<User>) => {
  const user = await userRepository.find(
    {},
    {
      fields: ["id", "company.id"],
      populate: ["company"],
      strategy: LoadStrategy.JOINED,
    }
  );
  /* 
  select `e0`.`id`, `c1`.`id` as `c1__id`, `c1`.`name` as `c1__name` 
  from `user` as `e0` 
  left join `company` as `c1` on `e0`.`company_id` = `c1`.`id`
  */
  console.log("getUsersDotFields", user);
};

/**
 * Repecting input fields, work perfectly
 */
const getUsersObjectFields = async (userRepository: EntityRepository<User>) => {
  const user = await userRepository.find(
    {},
    {
      fields: ["id", { company: ["id"] }],
      populate: ["company"],
      strategy: LoadStrategy.JOINED,
    }
  );

  /*
  select `e0`.`id`, `c1`.`id` as `c1__id` from `user` as `e0` 
  left join `company` as `c1` on `e0`.`company_id` = `c1`.`id`
  */
  console.log("getUsersObjectFields", user);
};

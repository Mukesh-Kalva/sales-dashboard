import { DataSource } from "typeorm";
import { Product } from "./src/dashboard/entities/product.entity";
import { Revenue } from "./src/dashboard/entities/revenue.entity";

export default new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
  logging: false,
  entities: [Product, Revenue],
  migrations: [],
  subscribers: [],
});

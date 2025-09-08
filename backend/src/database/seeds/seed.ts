import { AppDataSource } from "../data-source";
import { Product } from "../../dashboard/entities/product.entity";
import { Revenue } from "../../dashboard/entities/revenue.entity";

async function seed() {
  await AppDataSource.initialize();

  console.log("🌱 Seeding database...");

  // Insert Products
  const productRepo = AppDataSource.getRepository(Product);
  await productRepo.save([
    { name: "Phone", sales: 200 },
    { name: "Headphones", sales: 120 },
  ]);

  // Insert Revenue with values
  const revenueRepo = AppDataSource.getRepository(Revenue);
  await revenueRepo.save([
    { month: "January", value: 5000 },
    { month: "February", value: 7000 },
  ]);

  console.log("✅ Seeding finished!");
  await AppDataSource.destroy();
}

seed().catch((err) => {
  console.error("❌ Error seeding:", err);
});

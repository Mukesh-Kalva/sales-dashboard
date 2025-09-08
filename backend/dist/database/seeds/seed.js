"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const product_entity_1 = require("../../dashboard/entities/product.entity");
const revenue_entity_1 = require("../../dashboard/entities/revenue.entity");
async function seed() {
    await data_source_1.AppDataSource.initialize();
    console.log("🌱 Seeding database...");
    const productRepo = data_source_1.AppDataSource.getRepository(product_entity_1.Product);
    await productRepo.save([
        { name: "Phone", sales: 200 },
        { name: "Headphones", sales: 120 },
    ]);
    const revenueRepo = data_source_1.AppDataSource.getRepository(revenue_entity_1.Revenue);
    await revenueRepo.save([
        { month: "January", value: 5000 },
        { month: "February", value: 7000 },
    ]);
    console.log("✅ Seeding finished!");
    await data_source_1.AppDataSource.destroy();
}
seed().catch((err) => {
    console.error("❌ Error seeding:", err);
});
//# sourceMappingURL=seed.js.map
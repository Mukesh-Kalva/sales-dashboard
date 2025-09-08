"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDashboardTables1710000000000 = void 0;
const typeorm_1 = require("typeorm");
class CreateDashboardTables1710000000000 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "metrics",
            columns: [
                { name: "id", type: "serial", isPrimary: true },
                { name: "title", type: "varchar" },
                { name: "value", type: "varchar" },
                { name: "change", type: "numeric", isNullable: true },
            ],
        }));
        await queryRunner.createTable(new typeorm_1.Table({
            name: "revenue",
            columns: [
                { name: "id", type: "serial", isPrimary: true },
                { name: "month", type: "varchar" },
                { name: "amount", type: "numeric" },
            ],
        }));
        await queryRunner.createTable(new typeorm_1.Table({
            name: "customer_satisfaction",
            columns: [
                { name: "id", type: "serial", isPrimary: true },
                { name: "rating", type: "numeric" },
                { name: "responses", type: "int" },
            ],
        }));
        await queryRunner.createTable(new typeorm_1.Table({
            name: "visitor_insights",
            columns: [
                { name: "id", type: "serial", isPrimary: true },
                { name: "day", type: "varchar" },
                { name: "visitors", type: "int" },
            ],
        }));
        await queryRunner.createTable(new typeorm_1.Table({
            name: "top_products",
            columns: [
                { name: "id", type: "serial", isPrimary: true },
                { name: "name", type: "varchar" },
                { name: "sales", type: "int" },
                { name: "revenue", type: "numeric" },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("top_products");
        await queryRunner.dropTable("visitor_insights");
        await queryRunner.dropTable("customer_satisfaction");
        await queryRunner.dropTable("revenue");
        await queryRunner.dropTable("metrics");
    }
}
exports.CreateDashboardTables1710000000000 = CreateDashboardTables1710000000000;
//# sourceMappingURL=1700000000000-InitSchema.js.map
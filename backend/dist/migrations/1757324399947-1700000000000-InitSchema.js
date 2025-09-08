"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitSchema1700000000000 = void 0;
class InitSchema1700000000000 {
    constructor() {
        this.name = 'InitSchema1700000000000';
    }
    async up(queryRunner) {
        await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "metrics" (
        "id" SERIAL PRIMARY KEY,
        "totalRevenue" numeric NOT NULL,
        "totalVisitors" integer NOT NULL,
        "totalOrders" integer NOT NULL,
        "conversionRate" double precision NOT NULL
      );
    `);
        await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "products" (
        "id" SERIAL PRIMARY KEY,
        "name" varchar NOT NULL,
        "sales" integer NOT NULL,
        "revenue" numeric NOT NULL DEFAULT 0
      );
    `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE IF EXISTS "products";`);
        await queryRunner.query(`DROP TABLE IF EXISTS "metrics";`);
    }
}
exports.InitSchema1700000000000 = InitSchema1700000000000;
//# sourceMappingURL=1757324399947-1700000000000-InitSchema.js.map
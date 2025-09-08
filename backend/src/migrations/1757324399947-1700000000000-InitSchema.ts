import { MigrationInterface, QueryRunner } from "typeorm";

export class InitSchema1700000000000 implements MigrationInterface {
  name = 'InitSchema1700000000000'

  public async up(queryRunner: QueryRunner): Promise<void> {
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS "products";`);
    await queryRunner.query(`DROP TABLE IF EXISTS "metrics";`);
  }
}

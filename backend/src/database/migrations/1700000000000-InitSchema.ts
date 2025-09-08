import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDashboardTables1710000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Metrics table
    await queryRunner.createTable(
      new Table({
        name: "metrics",
        columns: [
          { name: "id", type: "serial", isPrimary: true },
          { name: "title", type: "varchar" },
          { name: "value", type: "varchar" },
          { name: "change", type: "numeric", isNullable: true },
        ],
      }),
    );

    // Revenue table
    await queryRunner.createTable(
      new Table({
        name: "revenue",
        columns: [
          { name: "id", type: "serial", isPrimary: true },
          { name: "month", type: "varchar" },
          { name: "amount", type: "numeric" },
        ],
      }),
    );

    // Customer satisfaction
    await queryRunner.createTable(
      new Table({
        name: "customer_satisfaction",
        columns: [
          { name: "id", type: "serial", isPrimary: true },
          { name: "rating", type: "numeric" },
          { name: "responses", type: "int" },
        ],
      }),
    );

    // Visitor insights
    await queryRunner.createTable(
      new Table({
        name: "visitor_insights",
        columns: [
          { name: "id", type: "serial", isPrimary: true },
          { name: "day", type: "varchar" },
          { name: "visitors", type: "int" },
        ],
      }),
    );

    // Top products
    await queryRunner.createTable(
      new Table({
        name: "top_products",
        columns: [
          { name: "id", type: "serial", isPrimary: true },
          { name: "name", type: "varchar" },
          { name: "sales", type: "int" },
          { name: "revenue", type: "numeric" },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("top_products");
    await queryRunner.dropTable("visitor_insights");
    await queryRunner.dropTable("customer_satisfaction");
    await queryRunner.dropTable("revenue");
    await queryRunner.dropTable("metrics");
  }
}

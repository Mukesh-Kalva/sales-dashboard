export default () => ({
  port: parseInt(process.env.PORT ?? '3001', 10), // default to 3001 if undefined
  database: {
    host: process.env.DB_HOST ?? 'localhost',
    port: parseInt(process.env.DB_PORT ?? '5432', 10), // default to 5432 if undefined
    username: process.env.DB_USERNAME ?? 'postgres',
    password: process.env.DB_PASSWORD ?? 'postgres',
    database: process.env.DB_NAME ?? 'dashboard_db',
  },
});

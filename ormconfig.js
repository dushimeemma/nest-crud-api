import dotenv from 'dotenv';

dotenv.config();

module.exports = {
  type: 'postgres',
  host: process.env.HOST,
  port: process.env.DB_PORT,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: true,
  entities: ['./dist/**/*.entity.{ts,js}'],
};

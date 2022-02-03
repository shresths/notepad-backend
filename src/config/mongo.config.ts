export const mongoConfig: { host: string; database: string } = {
  host: process.env.MONGO_HOST,
  database: process.env.MONGO_DATABASE,
};

module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: process.env.TIDB_HOST,
      port: process.env.TIDB_PORT,
      database: env('DATABASE_NAME', 'strapi'),
      user: process.env.TIDB_USER,
      password: process.env.TIDB_PASSWORD,
      // ssl: {
      //   minVersion: 'TLSv1.2',
      //   rejectUnauthorized: true
      // }
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

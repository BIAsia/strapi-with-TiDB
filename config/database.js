module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'gateway01.us-west-2.prod.aws.tidbcloud.com'),
      port: env.int('DATABASE_PORT', 4000),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', '4KVKyWFT3zeQC6e.root'),
      password: env('DATABASE_PASSWORD', 'bot2Onr8gwGaS91T'),
      // ssl: {
      //   minVersion: 'TLSv1.2',
      //   rejectUnauthorized: true
      // }
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

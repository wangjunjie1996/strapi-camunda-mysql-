module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      port: 3306,
      database: 'strapi',
      user: 'root',
      password: '123456',
      ssl: false,
    },
    useNullAsDefault: true,
  },
});

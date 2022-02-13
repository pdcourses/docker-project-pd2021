module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'dockerdb_pd2021',
    host: 'database',
    dialect: 'postgres',
    migrationStorage: 'json',
    seederStorage: 'json',
  },
  test: {},
  production: {},
};

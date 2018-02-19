module.exports = {
  host: 'localhost',
  database: 'ncontact_test',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'data/ncontact.test.sqlite',
    logging: false,
    define: {
      underscored: true
    }
  },
  port: process.env.PORT || 3000,
  ip: process.env.IP || '127.0.0.1'
}

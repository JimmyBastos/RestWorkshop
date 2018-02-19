module.exports = {
  host: 'localhost',
  database: 'ncontact_dev',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'data/ncontact.sqlite',
    define: {
      underscored: true
    }
  },
  port: process.env.PORT || 3000,
  ip: process.env.IP || '127.0.0.1'
}

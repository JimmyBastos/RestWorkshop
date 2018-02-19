module.exports = app => {
  const env = process.env.NODE_ENV || 'dev'

  if (env !== 'production') {
    console.log('------------ NODE_ENV:' + env + ' ------------')
  }

  return require(`./conf.${env}.js`)
}

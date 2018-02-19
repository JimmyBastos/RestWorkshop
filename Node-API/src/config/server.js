module.exports = app => {
  let sequelize = app.config.db.sequelize
  let config = app.config.conf

  if (process.env.NODE_ENV !== 'test') {
    // --- Resolve data base promise before start
    sequelize.sync().done(() => {
      // --- Run the server at 'PORT' and print it out
      app.listen(
        config.port,
        config.ip,
        () => {
          console.log(`API running at ${config.ip}:${config.port}`)
        })
    })
  }
}
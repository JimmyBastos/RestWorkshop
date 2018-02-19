import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'

// Singleton
let db = null

module.exports = app => {
  const config = app.config.conf
  if (!db) {
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    )
    db = {
      sequelize,
      Sequelize,
      models: {}
    }
    const modelsDir = path.resolve(process.cwd(), 'src/models')
    fs.readdirSync(modelsDir).forEach(file => {
      const model = sequelize.import(path.join(modelsDir, file))
      db.models[model.name] = model
    })
  }
  return db
}

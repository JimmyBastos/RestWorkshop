import express from 'express'
import load from 'consign'

// ---- Main express app instancy
const app = express()

// ---- Load all application modules
load({cwd: __dirname, verbose: false})
  .include('config/conf.js')
  .then('config/db.js')
  .then('config/app.js')
  .then('routes')
  .then('config')
  .into(app)

module.exports = app

import morgan from 'morgan'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import express from 'express'

module.exports = app => {
  // ---- Use morgan console logs
  app.use(morgan('dev'))

  // ---- Override methods to DELETE and PUT http requests
  app.use(methodOverride('_method'))

  // ---- body parser
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))

  // ---- remove request.body.id (evita conflitos com o sequelize)
  app.use((req, res, next) => {
    delete req.body.id
    next()
  })

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
  })
  
  // ---- Set JSON indent to 2 spaces
  app.set('json spaces', 2)

  // ---- Enable api docs directory
  app.use(express.static('public'))
}

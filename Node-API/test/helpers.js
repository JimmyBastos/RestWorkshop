import chai from 'chai'
import supertest from 'supertest'
import app from '../src/loader'

global.app = app
global.request = supertest(app)
global.expect = chai.expect

const root = app => {
  /**
   * @api {get} / 1. How to get the API Status?
   * @apiGroup Status
   * @apiSuccess {String} status API Status Message
   *@apiSuccessExample {json} Success Example
   *    HTTP/1.1 200 OK
   *    { status: 'Contacts List API' }
   */
  app.get('/', (req, res) =>
    res.json({ status: 'Contacts List API' })
  )
}

module.exports = root

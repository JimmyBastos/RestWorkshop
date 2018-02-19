module.exports = app => {
  // Load the contact module
  const Contact = app.config.db.models.Contact

  app.route('/contacts')
  /**
   * @api {get} /contacts 1. How to get the Contacts List?
   * @apiGroup Contacts
   * @apiSuccess {Object[]} contacts Returns a JSON Array containing all the contacts
   * @apiSuccess {String} contact.id Returns the contact UUID
   * @apiSuccess {String} contact.email Returns the contact's email
   * @apiSuccess {String} contact.firstName Returns the contact's first name
   * @apiSuccess {String} contact.lastName Returns the contact's last name or family name
   * @apiSuccess {String} contact.PhoneNumber Returns the contact's phone number: It must to match the pattern (99) 99999-9999
   * @apiSuccess {Date} contact.created_at Creation date
   * @apiSuccess {Date} contact.updated_at Last update
   * @apiSuccessExample {json} Success Example
   *  HTTP/1.1 200 OK
   * {
   *  "contacts": [{
   *    "id": "3bec0bd9-e396-4d85-8996-1a8bdf12f424",
   *    "email": "johndoe@mail.com",
   *    "firstName": "john",
   *    "lastName": "doe",
   *    "phoneNumber": "(99)99999-9999",
   *    "created_at": "2018-02-17T01:41:53.683Z",
   *    "updated_at": "2018-02-17T01:41:53.683Z"
   *   }]
   * }
   * @apiErrorExample
   *  HTTP/1.1 412 Precondition Falied
   */
  .get((req, res) => {
    Contact.findAll({
      order: [
        'firstName'
      ]
    })
    .then(contacts => res.json({contacts}))
    .catch(err => res.status(412).json({ msg: err.message }))
  })

  /**
   * @api {post} /contacts 2. How to create a new contact?
   * @apiGroup Contacts
   * @apiParam {String} email Contact's email
   * @apiParam {String} firstName Contact's first name
   * @apiParam {String} lastName Contact's last name or family name
   * @apiParam {String} PhoneNumber Contact's phone number: It must to match the pattern (99) 99999-9999
   * @apiParamExample {JSON} Input
   *  {
   *    "email": "johndoe@mail.com",
   *    "firstName": "john",
   *    "lastName": "doe",
   *    "phoneNumber": "(00) 00000-0000"
   *  }
   *  @apiSuccess {Object} contact Returns the new contact
   * @apiSuccess {String} contact.id Contact UUID
   * @apiSuccess {String} contact.email Contact's email
   * @apiSuccess {String} contact.firstName Contact's first name
   * @apiSuccess {String} contact.lastName Contact's last name or family name
   * @apiSuccess {String} contact.PhoneNumber Contact's phone number: It must to match the pattern (99) 99999-9999
   * @apiSuccess {Date} contact.created_at Creation date
   * @apiSuccess {Date} contact.updated_at Last update
   * @apiSuccessExample {json} Success Example
   *  HTTP/1.1 200 OK
   * {
   *    "id": "3bec0bd9-e396-4d85-8996-1a8bdf12f424",
   *    "email": "johndoe@mail.com",
   *    "firstName": "john",
   *    "lastName": "doe",
   *    "phoneNumber": "(99)99999-9999",
   *    "created_at": "2018-02-17T01:41:53.683Z",
   *    "updated_at": "2018-02-17T01:41:53.683Z"
   * }
   * @apiErrorExample
   *  HTTP/1.1 412 Precondition Falied
   */
  .post((req, res) => {
    Contact.create(req.body)
    .then(result => res.json(result))
    .catch(err => res.status(412).json({ msg: err.message }))
  })

  /**
   * @api {get} /contacts/:id 3. How to get a specific contact?
   * @apiGroup Contacts
   * @apiParam {String} id Contact's UUID
   * @apiParamExample {JSON} Route Example
   *    /contacts/3bec0bd9-e396-4d85-8996-1a8bdf12f424
   * @apiSuccess {Object} contact Returns the new contact
   * @apiSuccess {String} contact.id Contact UUID
   * @apiSuccess {String} contact.email Contact's email
   * @apiSuccess {String} contact.firstName Contact's first name
   * @apiSuccess {String} contact.lastName Contact's last name or family name
   * @apiSuccess {String} contact.PhoneNumber Contact's phone number: It must to match the pattern (99) 99999-9999 
   * @apiSuccess {Date} contact.created_at Creation date
   * @apiSuccess {Date} contact.updated_at Last update
   * @apiSuccessExample {json} Success Example
   *  HTTP/1.1 200 OK
   * {
   *    "id": "3bec0bd9-e396-4d85-8996-1a8bdf12f424",
   *    "email": "johndoe@mail.com",
   *    "firstName": "john",
   *    "lastName": "doe",
   *    "phoneNumber": "(99)99999-9999",
   *    "created_at": "2018-02-17T01:41:53.683Z",
   *    "updated_at": "2018-02-17T01:41:53.683Z"
   * }
   * @apiErrorExample
   *  HTTP/1.1 412 Precondition Falied
   */
  app.route('/contacts/:id')
  .get((req, res) => {
    Contact.findOne({ where: { id: req.params.id } })
    .then(result => result ? res.json(result) : res.sendStatus(404))
    .catch(err => res.status(412).json({ msg: err.message }))
  })

  /**
   * @api {put} /contacts/:id 4. How to update a contact?
   * @apiGroup Contacts
   * @apiParam {String} id Contact's UUID
   * @apiParam {String} email Contact's email
   * @apiParam {String} firstName Contact's first name
   * @apiParam {String} lastName Contact's last name or family name
   * @apiParam {String} PhoneNumber Contact's phone number: It must to match the pattern (99) 99999-9999
   * @apiParamExample {JSON} Input
   *  {
   *    "email": "update@mail.com",
   *    "firstName": "update",
   *    "lastName": "update",
   *    "phoneNumber": "(22) 22222-22222"
   *  }
   * @apiParamExample {JSON} Route Example
   *    /contacts/3bec0bd9-e396-4d85-8996-1a8bdf12f424
   * @apiSuccessExample {json} Success Example
   *  HTTP/1.1 204 No Content
   * @apiErrorExample {json} Error example
   *  HTTP/1.1 412 Precondition Falied
   */
  .put((req, res) => {
    Contact.update(req.body, { where: { id: req.params.id } })
    .then(result => res.sendStatus(204))
    .catch(err => res.status(412).json({ msg: err.message }))
  })

  /**
   * @api {delete} /contacts/:id 5. How to delete a contact?
   * @apiGroup Contacts
   * @apiParam {String} id Contact's UUID
   * @apiParamExample {JSON} Route Example
   *    /contacts/3bec0bd9-e396-4d85-8996-1a8bdf12f424
   * @apiSuccessExample {json} Success Example
   *  HTTP/1.1 204 No Content
   * @apiErrorExample
   *  HTTP/1.1 412 Precondition Falied
   */
  .delete((req, res) => {
    Contact.destroy({ where: { id: req.params.id } })
    .then(result => res.sendStatus(204))
    .catch(err => res.status(412).json({ msg: err.message }))
  })
}

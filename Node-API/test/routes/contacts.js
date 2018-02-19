describe('----- Routes: Contacts', () => {
  // Pog Nossa de cada dia
  var fakeContact = {}
  // Load modules
  const Contact = app.config.db.models.Contact
  // ---- Load Sequelize
  const sequelize = app.config.db.sequelize

  beforeEach(done => sequelize.sync().done(() => done()))

  beforeEach(done => {
    console.log('\n---------------------------------------------\n')

    // ---- Limpa a tabela de  contatos
    Contact.create({
      email: 'jane@mail.com',
      firstName: 'Jane',
      lastName: 'Doe',
      phoneNumber: '+99 (99) 99999-9999'
    }).then((newContact) => {
      fakeContact = newContact
      done()
    })
  })

  afterEach(done => {
    Contact.drop().then(() => done())
  })

  describe('GET /contacts', () => {
    describe('status [200]', () => {
      it('Returns a list of contacts', done => {
        request.get('/contacts')
          .expect(200)
          .end((err, res) => {
            expect(res.body.contacts).to.have.length(1)
            expect(res.body.contacts[0].email).to.eql('jane@mail.com')
            expect(res.body.contacts[0].firstName).to.eql('Jane')
            expect(res.body.contacts[0].lastName).to.eql('Doe')
            expect(res.body.contacts[0].phoneNumber).to.eql('+99 (99) 99999-9999')
            done(err)
          })
      })
    })
  })

  describe('POST /contacts', () => {
    describe('status [200]', () => {
      it('Creates a new contact', done => {
        request.post('/contacts')
          .send({
            email: 'david@mail.com',
            firstName: 'David',
            lastName: 'Walker',
            phoneNumber: '+99 (99) 99999-9999'
          })
          .expect(200)
          .end((err, res) => {
            expect(res.body.email).to.eql('david@mail.com')
            expect(res.body.firstName).to.eql('David')
            expect(res.body.lastName).to.eql('Walker')
            expect(res.body.phoneNumber).to.eql('+99 (99) 99999-9999')
            done(err)
          })
      })
    })
  })

  describe('GET /contacts/:id', () => {
    describe('status [200]', () => {
      it('Returns one contact', done => {
        request.get(`/contacts/${fakeContact.id}`)
          .expect(200)
          .end((err, res) => {
            expect(res.body.email).to.eql(fakeContact.email)
            expect(res.body.firstName).to.eql(fakeContact.firstName)
            expect(res.body.lastName).to.eql(fakeContact.lastName)
            expect(res.body.phoneNumber).to.eql(fakeContact.phoneNumber)
            done(err)
          })
      })
    })

    describe('status [404]', () => {
      it('Throw error when contact doesnt exist', done => {
        request.get('/contacts/0')
          .expect(404)
          .end((err, res) => done(err))
      })
    })
  })

  describe('PUT /contacts/:id', () => {
    describe('status [204]', () => {
      it('Updates a contact', done => {
        request.put(`/contacts/${fakeContact.id}`)
          .send({
            email: 'updated@mail.com',
            firstName: 'Updated',
            lastName: 'Updated',
            phoneNumber: '+11 (11) 11111-1111'
          })
          .expect(204)
          .end((err, res) => done(err))
      })
    })
  })

  describe('DELETE /contacts/:id', () => {
    describe('status [204]', () => {
      it('Removes a contact', done => {
        request.delete(`/contacts/${fakeContact.id}`)
          .expect(204)
          .end((err, res) => done(err))
      })
    })
  })
})
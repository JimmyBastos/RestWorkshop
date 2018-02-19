describe('----- Routes: index (Root route)', function () {
  describe('GET /', function () {
    it('Return the API status', function (done) {
     request.get('/')
        .expect(200)
        .end(function (err, res) {
          const expected = { status: 'Contacts List API' }
          expect(res.body).to.eql(expected)
          done(err)
        })
    })
  })
})

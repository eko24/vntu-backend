var chai = require('chai'),
    expect = chai.expect,
    should = chai.should(),
    assert = chai.assert;

chai.use(require('chai-http'));

describe('Basic', function() {
    it('API is up (at least default entry poinst)', function(done) {
        chai.request('http://localhost:8080')
            .get('/')
            .end(function(err, res) {
                try {
                    expect(err).to.be.null;
                    expect(res).to.have.status(200);
                    done();
                } catch (e) {
                    console.log(e)
                }
            });
    });
});
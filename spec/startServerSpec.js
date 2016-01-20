var request = require("request");

var port = process.env.PORT || 8080;

var base_url = "http://localhost:" + port + "/";

describe("Hello World Server", function() {
  describe("GET /", function() {

    beforeEach(function (done) {
      //set up
      var initialState;
      // call something asynchronous
      done();
    });

    it("returns status code 404", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(404);
        done();
      });
      // expect(true).toBe(true);
    });

  });
});

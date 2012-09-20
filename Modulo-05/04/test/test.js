var sumfile = require("../sumfile");
var fs = require("fs");

describe("sum file", function(){
  
  beforeEach(function(done){
    this.fixtureFile = __dirname + "/fixture-1.txt";

    //crea un archivo antes de cada test.
    var lines = ["1", "100", "99"];
    fs.writeFile(this.fixtureFile, lines.join("\n"), function(err){
      done();
    });
  });

  afterEach(function(done){
    //elimina el archivo antes de cada test.
    fs.unlink(this.fixtureFile, function(err){
      done();
    });
  });

  it("should return the sume of all lines", function(done){
    sumfile(this.fixtureFile, function(err, sum){
      sum.should.be.eql(200);
      done();
    });
  });

});
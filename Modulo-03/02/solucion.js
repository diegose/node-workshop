var fs = require("fs");
var readStream = fs.createReadStream(__dirname + "/index.html");

readStream.pipe(process.stdout);
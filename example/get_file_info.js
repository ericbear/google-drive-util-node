var util = require("../google_drive_util.js");

var oauth = util.readTokenSync();
var fileId = util.readLineSync("input fileId:");

util.getFileInfo(oauth, fileId, "", function(path, res) {
    console.log(res);
});

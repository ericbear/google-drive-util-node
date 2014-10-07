var util = require("../google_drive_util.js");

var srcFolderId = util.readLineSync("input srcFolderId: ");
var destFolderId = util.readLineSync("input destFolderId: ");

var oauth = util.readTokenSync();

util.copyFolder(oauth, srcFolderId, destFolderId, "", function(path, res) {
    console.log("copied: ", path+res.title);
});
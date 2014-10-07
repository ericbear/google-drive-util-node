var util = require("../google_drive_util.js");

var oauth = util.readTokenSync();
var folderId = util.readLineSync("input folderId:");
util.getFileInfo(   oauth,
                    folderId,
                    "",
                    handleCallback);
                 
function handleCallback(path, res) {
    console.log(path+res.title, " - ", res.mimeType);

    if (util.isFolder(res)) {
        util.getFolderInfo(oauth, res.id, path+res.title+"/", handleCallback);
    }
}
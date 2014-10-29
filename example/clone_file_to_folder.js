var util = require("../google_drive_util.js");
var questions = ["input fileId:", "input folderId:"];

util.readToken(function(oauth) {
    util.readLinesSync(questions, function(answers) {
        util.copyFile(oauth, answers[0], answers[1], function (res) {
            console.log(res);
        });
    });
});

var util = require("../google_drive_util.js");

util.readToken( function(oauth) {
    util.readLines( [   "input fileId:",
                        "input folderId:"],
                    function(answers) {
                        util.copyFile(  oauth,
                                        answers[0],
                                        answers[1],
                                        function (res) {
                                            console.log(res);
                                        });
                    });
});

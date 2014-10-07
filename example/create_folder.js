var util = require("../google_drive_util.js");

util.readToken( function(oauth) {
    util.readLine(  'input folderId:',
                    function(folderId) {
                        util.readLine(  'input folder name:',
                                        function(name) {
                                            util.createFolder(  oauth,
                                                                folderId,
                                                                name,
                                                                function(res) {
                                                                    console.log(res);
                                                                });
                                        });
                    });
});

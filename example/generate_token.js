var util = require("../google_drive_util.js");
util.saveAccessToken(function() { process.kill() });
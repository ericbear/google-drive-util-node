google-drive-util
=================

google-drive-util is a utility tools to use Google Drive Api through node.js

## Prerequisite

 - enable Google API for google drive on [Developer Console](https://console.developer.google.com/)
   - select / create a project
   - switch `ON` the status for `Drive API` under `APIs & auth / APIs`
 - create a Client ID
   - go to `APIs & auth / Credentials`
   - press `Create new Client ID`
        - select "Installed application" for `APPLICATION TYPE`
        - select "Other" for `INSTALLED APPLICATION TYPE`
 - copy `CLIENT ID`, `CLIENT SECRET` & `REDIRECT URIS` to prepare a configuration file `google.conf` under your project
```
{
    "CLIENT_ID" : "xxxxxxxxxxxxx.apps.googleusercontent.com",
    "CLIENT_SECRET" : "xxxxxxxxxxxx",
    "REDIRECT_URL" : "xxxxxxxxxxxxxxx:oauth:2.0:oob",
    "ACCESS_TYPE" : "offline",
    "SCOPE" : "https://www.googleapis.com/auth/drive"
}
```
 
## Usage
 
### Step 1:
_install it through npm._
`npm install google-drive-util`

### Step 2:
_copy `google.conf` into your project folder._

### Step 3:
_generate your access token, copy the url on browser to grant the access right._
```
node node_modules/google-drive-util/example/generate_token.js
Visit the url:  https://accounts.google.com/o/oauth2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive&response_type=code&client_id=XXXXXXXXXXX&redirect_uri=XXXXXXXXXXXX
Enter the code here:
```

### Step 4: 
_just do it. show your folder tree ^^_
```
var util = require("google-drive-util");

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
```

## Tips
`folderId` or `fileId` can be retreived from the url on your google drive

- `folderId` is `CB99NssLykEgDNFotbDh2TEJVQVk`
> https://drive.google.com/#folders/CB99NssLykEgDNFotbDh2TEJVQVk

- `fileId` is `1_uMgUz-xjTxsvoV5Cllu6k3DupL0jPpPvji8WlDmho`
> https://docs.google.com/spreadsheets/d/1_uMgUz-xjTxsvoV5Cllu6k3DupL0jPpPvji8WlDmho/edit#gid=1596191579


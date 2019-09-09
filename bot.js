const fs = require("fs");
const login = require("facebook-chat-api");
var FormData = require('form-data');
var answeredThreads = {};
login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
 
    api.setOptions({
     selfListen: false,
        logLevel: "silent",
        updatePresence: false
    });
    if(err) return console.error(err);
    api.listen(function callback(err, message) {
        console.log(message.threadID);
        if(!answeredThreads.hasOwnProperty(message.threadID)){
            answeredThreads[message.threadID] = true;
            api.sendMessage("BOT - Hiện tại mình Không online, mình sẽ trả lời bạn ngay khi online, hoặc gọi cho mình: 0973.642.632", message.threadID);
        }
    });
 
});
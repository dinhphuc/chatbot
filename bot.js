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

            //Chức năng này dành cho người muốn bỏ qua ID nào đó
            // Tìm id ở đây https://findmyfbid.in/
            // Thêm 1 người vào chỉ cần thêm dấu ,"ID người"
            // Group cũng thế
            var blockUserIds =["10002701265xx59","100008xx2353680"];
            var blockGroupIds =["2406280742789782","2705897476091143"];
            var crushId ="10002701265xx59";
            var myLoveId ="100008xx2353680";


            if(blockUserIds.find(x=>x ==message.threadID)){
                return console.error("block ID: "+ message.threadID);
            }

            if(blockGroupIds.find(x=>x == message.threadID)){
                return console.error("block GroupId: " + message.threadID);
            }

            //Chức năng này dành cho người muốn nhắn riêng với id nào đó
            // switch(message.threadID){
            //     case crushId:
            //             api.sendMessage("Chào crush", message.threadID);
            //         break;
            //     case myLoveId:
            //                 api.sendMessage("Chào ny", message.threadID);
            //             break;
            // }
 


            answeredThreads[message.threadID] = true;
            api.sendMessage("BOT - Hiện tại mình Không online, mình sẽ trả lời bạn ngay khi online, hoặc gọi cho mình: 0973.642.632", message.threadID);
       
       
       
        }
    });
 
});
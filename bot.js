const fs = require("fs");
const login = require("facebook-chat-api");
var FormData = require('form-data');
const simsimi = require('simsimi')({
	key: 'xM3sVHl9QWuN3xx+Bh0ds9EnEHWslRnYIOLphVk/',
	lang: "vn",
	atext_bad_prob_max:0.5,
	atext_bad_prob_min:0.2,
});

var answeredThreads = {};
var botStatusThreads = {};
var isSimsimi = false;

blockGroupChat = function (threadID){ 
	var blockGroupIds = ["id gourup chat", "id gourup chat"]; 
	if (blockGroupIds.find(x => x == threadID)) {
		 console.error("block GroupId: " + threadID);
		 return true;
	}
	return false;
}

blockUserChat = function (threadID){  
	var blockUserIds = ["id user", "id user"];
	if (blockUserIds.find(x => x == threadID)) {
		 console.error("block ID: " + threadID);
		 return true;
	}
	return false;
}

login({ appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8')) }, (err, api) => {

	api.setOptions({
		selfListen: false,
		logLevel: "silent",
		updatePresence: false
	});
	if (err) return console.error(err); 

	api.listen(function callback(err, message) {
		console.log(message.threadID); 
		//Simsimi
		if (message.body == "bot"||message.body == "Bot") {
			botStatusThreads[message.threadID] = true;
			isSimsimi = true;
			api.sendMessage("Đã bật chế độ nói chuyện với bot (gõ offbot để tắt). Bắt đầu nào!", message.threadID);
			return console.log("On sim");
		} else if (message.body == "offbot"||message.body == "Offbot") {
			isSimsimi = false;
			botStatusThreads[message.threadID] = false;
			api.sendMessage("Đã tắt chế độ nói chuyện với bot.", message.threadID);
		}

		if (isSimsimi&&botStatusThreads.hasOwnProperty(message.threadID)) {
			(async () => {
				try{ 
					if(blockGroupChat(message.threadID)){return;};
					if(blockUserChat(message.threadID)){return;}; 
					const response = await simsimi(message.body); 
					api.sendMessage(response, message.threadID);
				}catch{
					api.sendMessage("Bot không hiểu bạn nói. Xin lỗi nha :(", message.threadID);
				}
			})();
			return console.log("sim next");
		}

		if (!answeredThreads.hasOwnProperty(message.threadID)) {

			//Chức năng này dành cho người muốn bỏ qua ID nào đó
			// Tìm id ở đây https://findmyfbid.in/
			// Thêm 1 người vào chỉ cần thêm dấu ,"ID người"
			// Group cũng thế

			if(blockGroupChat(message.threadID)){
				return;
			};
			if(blockUserChat(message.threadID)){
				return;
			}; 

			answeredThreads[message.threadID] = true;
			api.sendMessage("Tin nhắn trả lời tự động.\n- Trả lời `bot` để nói chuyện đỡ buồn.", message.threadID);


		}
	});

});
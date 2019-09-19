# Chat-bot facebook
> Send messages facebook when you offline

![chat-bot](https://i.imgur.com/WeT8Y6x.png)


## Installation

### Step 1: [Clone project](https://github.com/seakBz/chatbot.git)
### Step 2: Install Environment
1. [Node js](https://nodejs.org/dist/v10.16.3/node-v10.16.3-x64.msi).
2. App: Google authenticator [On AppStore or CH Play]
3. Git: [Git](https://git-scm.com/)
### Step 3: Set Google authenticator
1. [Two-factor authentication](https://www.facebook.com/security/2fac/settings/).

![Two-factor authentication](https://i.imgur.com/cBpBezY.png)

2. In Mobile open app [Google authenticator] `open - > scan QR` enter `Code`

![Two-factor authentication](https://i.imgur.com/CVaokMR.png)


### Step 4 - Edit content
1. Open file
![Open file](https://i.imgur.com/tHHZ5p1.gif)

2. Run `npm install `

3. Edit file `login.js`
![Open file](https://i.imgur.com/QxJNrWy.png)

4.   Edit file `bot.js`
![Open file](https://i.imgur.com/zsyRrVq.png)

4. On cmd screen  
 - Run `node login.js` -> Created file ` appstate.json`
 - Run `node bot.js`

## Deploy on heroku

1. Create app and push code

![Create App](https://i.imgur.com/ZMTNrMe.gif)

2 - Start  (This is option **ON** - **OFF** bot)

![Run](https://i.imgur.com/QNY4JJh.gif)

### Edit file - > Push on host

`git add .`

`git commit -m "content comment"`

`git push heroku master`

![Create App](https://i.imgur.com/LlyvegL.gif)

### Create Traffic for website app
1. Go to [pingdom](https://www.pingdom.com). -> Create Account
![pingdom](https://i.imgur.com/YxYqWnr.png)
2. add website app
![pingdom](https://i.imgur.com/nZD6qvw.png)
 

//Подлючение зависимостей
const express = require('express')
const WsServer = require('ws').Server
const http = require("http");
const chokidar = require('chokidar');


// Инициализируем сервер
const app = express()
const server = http.createServer(app);

// Инициализируем веб сокет
const webSocketServer = new WsServer({
    server: server
});


//следим за подсоединением к веб сокет серверу
webSocketServer.on('connection',function(ws) {
    //chokidar следит за изменением файлов
    console.log('Connnection');
    chokidar.watch('../client').on('change', (event, path) => {
        //посылаем в браузер сообщение для перезагрузки окна браузера
        console.log(event, path);
        ws.send('relode')
    });

});


//const { response } = require('express')



//ws.on('open', function open() {
 //   ws.send('something');
 // });
  
 // ws.on('message', function incoming(message) {
 //   console.log('received: %s', message);
 // });





// request - получаем данные из формы .response - отсылает данные пользователю
app.get('/test-form',function(request,response) {
   response.send(request.query)
}) 

app.use(express.static('../client'))

//  консоль пишет в название 
server.listen(3000, function() {
   console.log ('http://localhost:3000');
})


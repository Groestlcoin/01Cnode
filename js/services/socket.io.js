var angular = require("angular");
var io = require("socket.io-client");
require("angular-socket-io");

var app = angular.module("service.socket.io", [
    'btford.socket-io'
]);

app.factory('socketio', ['socketFactory', function(socketFactory){
    var mySocket = io.connect('');
    return socketFactory({
        ioSocket: mySocket
    });  
}]);

module.exports = app;

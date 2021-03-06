var zmq = require('zeromq')
  , sock = zmq.socket('sub');

sock.connect('tcp://127.0.0.1:1441');
sock.subscribe('rawtx');// hashblock hashtx rawblock');
sock.subscribe('hash');
sock.subscribe('hashblock');
console.log('Subscriber connected to port 1441');

sock.on('message', function(topic, message) {
  console.log('received a message related to:', topic.toString(), 'containing message:', message.toString('hex'));
});

const EventEmitter = require('events');

var url ='http://mylogger.io.log';

class Logger extends EventEmitter{
  log(message) {
    console.log('message:', message);

    //raise event
    this.emit('messageLogged', { id: 1, url}); // signal that a event has happened

  }
}

module.exports = Logger;

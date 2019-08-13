const Logger = require('./logger');
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/'){
    res.write('<b>Hello World</b>');
    res.end();
  }
  if (req.url === '/api/courses'){
    res.write(JSON.stringify([ 1, 2, 3, 4 ]));
    res.end();
  }

});


server.listen(3003);
console.log('listening on port 3003');



// //register a listener
// const logger = new Logger();
//
// logger.on('messageLogged', (arg) => {
//   console.log('Listener called', arg);
// });
//
// logger.log('message');

// const myLoggingCallback = (args) => {
//   const { data, id } = args;
//   console.log('myLoggingCallback id', id);
//   console.log('myLoggingCallback data', data);
//   const newArgs = {
//     ...args,
//     data:'This is NEW',
//   };
//   console.log('myLoggingCallback newArgs', newArgs);
//
// };
//
// emitter.on('logging', myLoggingCallback);
// emitter.emit('logging', { id:'123', data:'This is my message' });



// const free = os.freemem();
// const pathObj = path.parse(__filename);
// console.log(`total memory ${free}`);

// const mycallback = (err, files) => {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('result', files);
//   }
// }
// fs.readdir('./', function (err, files) {
// fs.readdir('./', mycallback);

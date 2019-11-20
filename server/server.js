const color = require('colors');
//luego de instalar el modulo, importamos el express
const express = require('express');
//inicializamos express
const app = express();
//luego de instalar el modulo, importamos el express
const SocketIO = require('socket.io');
//luego de instalar el modulo, importamos el serialport
const SerialPort = require('serialport');
//para leer la infor que viene a traves del serialport
const ReadLine = SerialPort.parsers.Readline;
const htpp = require('http');

//creamos un server, donde el servidor es app y devuelve un objeto
const server = htpp.createServer(app);
//le pasamos el servidor al socket, para que escuche por ahí
const io = SocketIO.listen(server);
io.on('connection', (client) => {
    console.log('========= Usuario conectado ========='.green);
})

//hacemos una carpeta publica para ver los datos
const path = require('path');
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

//llamamos el yargs para obtener el puerto del arduino
const argv = require('.././config/yargs').argv;
console.log("========= PUERTO ARDUINO =========".green);
console.log(`${argv.puerto}`.red);
console.log("==================================".green);


//hacemos la conexion, indicando el puerto y el baudRate, lo guardamos en una constante
//para tener un objeto
const mySerial = new SerialPort(argv.puerto, {
    baudRate:9600
});

//cuando se conecte
mySerial.on('open', () => {
    console.log('========= Puerto arduino abierto ========='.green);
});

//imprimimos la data que viene
mySerial.on('data', function(data) {
    console.log(data);
    io.emit('data', data);
});


server.listen(3000, () => {
    console.log('========= Server escuchando en el puerto ========='.green);
    console.log("3000".red);
});


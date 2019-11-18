//luego de instalar el modulo, importamos el serialport
const SerialPort = require('serialport');
//para leer la infor que viene a traves del serialport
const ReadLine = SerialPort.parsers.Readline;


const parser = new ReadLine();

//hacemos la conexion, indicando el puerto y el baudRate, lo guardamos en una constante
//para tener un objeto
const mySerial = new SerialPort('puerto', {
    baudRate:9600
});

//cuando se conecte
mySerial.on('open', () => {
    console.log('Puerto abierto');
});

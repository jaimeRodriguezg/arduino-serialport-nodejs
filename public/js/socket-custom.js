
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
// The type of chart we want to create
type: 'line',

// The data for our dataset
data: {
    labels: ["Serial"],
    datasets: [{
        label: "Serial Data from Arduino",
        backgroundColor: 'rgb(52, 73, 94)',
        borderColor: 'rgb(41, 128, 185)',
        data: [],
    }]
},

    // Configuration options go here
    options: {}
});

let counter = 0 ;

var socket = io();
socket.on('connect',function(){
    console.log('Conectado al servidor');
});

//on -> escuchan sucesos
socket.on('disconnect', function(){ 
    console.log('Perdimos conexión con el servidor');
});
d = document.getElementById("datos");
socket.on('data', function(dataArduino){
    //byteLength representa la longitud del arraybuffer en bytes.
    console.log('servidor: ',dataArduino.byteLength);
    chart.data.labels.push(counter);
    chart.data.datasets.forEach(dataset => {
        dataset.data.push(dataArduino.byteLength);
    });
    
    d.innerHTML = counter;
    counter++;
    chart.update();
});

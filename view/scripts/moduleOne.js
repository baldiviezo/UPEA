//------gauge
const values = [];
for (let i = 0; i <= 46; i++) {
    values.push(document.getElementById(`value_edf1_${i}`));
}

setInterval(() => {
    fetch('../lrtr_edf1', {
        method: "POST"
    }).then(response => response.json()).then(data => {
        for (let i = 0; i < values.length; i++) {
            values[i].innerHTML = data[i].toFixed(2);
        }
    }).catch(err => console.log(err));
}, 1000);

//------chart
const modalChart = document.getElementById('modalChart');
const closeModalChart = document.getElementById('closeModalChart');
closeModalChart.addEventListener('click', () => modalChart.classList.remove('modal__show'));
const array = [];
function showChart(a) {
    modalChart.classList.add('modal__show');
    array = a;
}

let trend = {};
let arrayUndefined = [];
trend = {
    datasets: [{
        data: arrayUndefined,
        label: "",
        borderColor: 'rgba(0,161,209,1)',
        backgroundColor: 'rgba(0,161,209,1)',
        borderWidth: 1,
    }]
}
const config = {
    type: 'line',
    data: trend,
    options: {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'hour'  //year,day,hour,min
                }
            },
            y: {
                //beginAtZero: true
            }
        },
        layout: {
            padding: { //espacio entre la etiqueta  cambas y el grafico
                top: 10,
                right: 20,
                bottom: 0,
                left: 20
            }
        },
        animation: false,  //desabilita la animacion de subida
        elements: {
            point: {
                radius: 0 // ya no muestra los puntos
            }
        }
    }
}
var chart = document.getElementById('chart');
var myChart = new Chart(chart, config);
myChart.update();


setInterval(() => {
    fetch('../ttr_edf1', {
        method: "POST",
        body: JSON.stringify(array)
    }).then(response => response.json()).then(data => {
        datos = data.reverse();
        arrayUndefined = [];
        datos.forEach(element => {
            arrayUndefined.push({ x: element.x, y: element.y[0]});
        });
        myChart.config.data.datasets[0].data = arrayUndefined;
        myChart.update();
    }).catch(err => console.log(err));

}, 1000);

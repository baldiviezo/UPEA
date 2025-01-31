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
function showChart(a,b,c,d) {
    fetch('../ttr_edf1', {
        method: "POST",
        body: JSON.stringify({ a: a, b: b, c: c })
    }).then(response => response.json()).then(data => {
        console.log(data);
    }).catch(err => console.log(err));
}
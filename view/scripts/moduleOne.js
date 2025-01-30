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
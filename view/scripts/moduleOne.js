const values = [];
for (let i = 0; i <= 46; i++) {
  values.push(document.getElementById(`value_edf1_${i}`));
}

setInterval(() => {
    fetch('../ttr_edf1', {
        method: "POST"
    }).then(response => response.json()).then(data => {
        const pac3200 = data[0].VR.slice(0, 21).concat(
            data[0].VR.slice(27, 28),
            data[0].VR.slice(31, 35),
            data[0].VR.slice(37,58)
        );
        for (let i = 0; i < values.length; i++) {
            values[i].innerHTML = pac3200[i].toFixed(2);
        }
    }).catch(err => console.log(err));
}, 1000);
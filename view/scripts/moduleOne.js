const value_edf1_0 = document.getElementById('value-edf1-0');
const value_edf1_1 = document.getElementById('value-edf1-1');
const value_edf1_2 = document.getElementById('value-edf1-2');
const value_edf1_3 = document.getElementById('value-edf1-3');
const value_edf1_4 = document.getElementById('value-edf1-4');
const value_edf1_5 = document.getElementById('value-edf1-5');
setInterval(() => {
    fetch('../ttr_edf1', {
        method: "POST"
    }).then(response => response.json()).then(data => {
        data[0].VR.forEach(element => {
            value_edf1_0.textContent = `${values[0].toFixed(2)} V`;
            value_edf1_1.textContent = `${values[1].toFixed(2)} V`;
            value_edf1_2.textContent = `${values[2].toFixed(2)} V`;
            value_edf1_3.textContent = `${values[3].toFixed(2)} V`;
            value_edf1_4.textContent = `${values[4].toFixed(2)} V`;
            value_edf1_5.textContent = `${values[5].toFixed(2)} V`;
        });
    }).catch(err => console.log(err));
}, 1000);
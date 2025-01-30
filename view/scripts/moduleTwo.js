
fetch('../ttr_edf1', {
    method: "POST"
}).then(response => response.json()).then(data => {
    console.log(data);
}).catch(err => console.log(err));
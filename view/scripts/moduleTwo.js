
fetch('../lrtr_edf1', {
    method: "POST"
}).then(response => response.text()).then(data => {
    console.log(data);
}).catch(err => console.log(err));
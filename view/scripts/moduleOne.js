setInterval(() => {
    fetch('../UPEA', {
        method: "POST"
    }).then(response => response.text()).then(data => {
        console.log(data);
    }).catch(err => console.log(err));
}, 1000);
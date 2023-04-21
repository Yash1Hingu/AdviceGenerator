fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        // Do something with the data
        console.log(data.slip.advice);
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });
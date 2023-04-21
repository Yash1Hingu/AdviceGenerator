const adviceID = document.getElementById("adviceID");
const advicequote = document.getElementById("quote");

async function logJSONdata(){
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(async(data) => {
        // Do something with the data
        const advice = await data.slip.advice;
        const id = await data.slip.id;
        updateData(advice,id);
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });
}

function updateData(advice,id){
    adviceID.innerHTML = id;
    advicequote.textContent = "\" "+ advice + "\""
}
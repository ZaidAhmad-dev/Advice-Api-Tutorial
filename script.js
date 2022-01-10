const APIUrl = "https://api.adviceslip.com/advice";

let randomAdvice = document.getElementById("random-advice");
let randomAdviceButton = document.getElementById("new-advice");

fetch(APIUrl)
.then(
    (resp) => {
        return resp.json()
    }
).then((data) => {
    randomAdvice.innerHTML = data.slip.advice;
})

randomAdviceButton.addEventListener("click", getNewAdvice);

function getNewAdvice(){
    fetch(APIUrl)
.then(
    (resp) => {
        return resp.json()
    }
).then((data) => {
    console.log(data.slip.advice)
    randomAdvice.innerHTML = data.slip.advice;
})
}
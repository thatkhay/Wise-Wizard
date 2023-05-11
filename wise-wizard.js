const adviceId = document.querySelector('.adviceId');
const generatedAdvice = document.querySelector('.generatedAdvice');
const button = document.querySelector('.button');

button.addEventListener('click', function(){
    const apiUrl = 'https://api.adviceslip.com/advice';

function getAdvice() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const adviceSlip = data.slip.advice;
      console.log(adviceSlip);
      // do something with the advice slip, such as displaying it on a web page
    })
    .catch(error => console.error(error));
}

getAdvice();


} )

// const apiUrl = 'https://api.adviceslip.com/advice';

// function getAdvice() {
//   fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//       const adviceSlip = data.slip.advice;
//       console.log(adviceSlip);
//       // do something with the advice slip, such as displaying it on a web page
//     })
//     .catch(error => console.error(error));
// }

// call the getAdvice function to retrieve a random advice slip
// getAdvice();

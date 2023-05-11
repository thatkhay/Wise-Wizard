const adviceId = document.querySelector('.adviceId');
const generatedAdvice = document.querySelector('.generatedAdvice');
const button = document.querySelector('.button');
let adviceIdString = 'ADVICE';
let sign = '#';

button.addEventListener('click', function() {
  const apiUrl = `https://api.adviceslip.com/advice?${Date.now()}`;

  function getAdvice() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const adviceSlip = data.slip;
        adviceId.textContent = `${adviceIdString} ${sign}${adviceSlip.id}`;
        generatedAdvice.textContent = `"${adviceSlip.advice}"`;
      })
      .catch(error => console.error(error));
  }

  getAdvice();
});




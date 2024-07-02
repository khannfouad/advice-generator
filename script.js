const quoteId = document.getElementById("quote-id");
const quote = document.getElementById("quote-general");
const quoteGenerator = document.getElementById("quote-generator");

quoteGenerator.addEventListener("click", fetchingQuote)

function fetchingQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then(data =>{
      quoteId.textContent = `advice #${data.slip.id}`
      quote.textContent = `"${data.slip.advice}"`
})
}
    

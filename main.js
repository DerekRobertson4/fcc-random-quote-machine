const fetchQuote = () => { 
  fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    document.getElementById('text').textContent = data.content
    document.getElementById('author').textContent = data.author
  });
}

const newQuote = document.getElementById('new-quote');
document.addEventListener('load', fetchQuote());
newQuote.addEventListener('click', fetchQuote);
const quotes = [
  "how can mirriors be real if our eyes aren't real",
  "10 score and 7 years ago",
  "My kindom for a quote",
];

function getRandomQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

module.exports = getRandomQuote;
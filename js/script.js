// This function randomly selects an object in an given array
function getRandomQuote (quote) {
  return quote[Math.floor(Math.random() * Math.floor(quote.length))];
};

// This function calls the getRandomQuote function and creates a html-layout that will display a random quote
function printQuote (quote) {
  var randomQuote = getRandomQuote(quote);
  var quoteHtml = '<p class="quote">' + randomQuote.quote + '</p>';
  quoteHtml += '<p class="source">' + randomQuote.source;
  quoteHtml += '<span class="citation">' + randomQuote.citation + '</span>';
  quoteHtml += '<span class="year">' + randomQuote.year + '</span>';
  quoteHtml += '</p>';
  document.getElementById('quote-box').innerHTML = quoteHtml;
};

printQuote(quotes);

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", function() { printQuote(quotes);
    }, false);

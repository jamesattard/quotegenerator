var url = "http://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
var getQuote = function(data) {
  $("#quote-id").text(data.quoteText);
  var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor +' @jamezattard google.com';
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $("#author-id").text(' ' + data.quoteAuthor);
  $(".twitter-share-button").attr("href", quot);
};
$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');
});
$("#quotebutton").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});
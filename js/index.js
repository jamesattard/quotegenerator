var url = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
var getQuote = function(data) {
  //console.log(data);
  var quoteText = $(data[0].content).text();
  $("#quote-id").text(quoteText);
  var quot = 'https://twitter.com/intent/tweet?text=' + quoteText + ' Author ' + data[0].title +' @jamezattard google.com';
  if (data[0].title === '') {
    data[0].title = 'Unknown';
  }
  $("#author-id").text(' ' + data[0].title);
  $(".twitter-share-button").attr("href", quot);
};
$(document).ready(function() {
  $.ajaxSetup({ cache: false });
  $.getJSON(url, getQuote);
});
$("#quotebutton").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});

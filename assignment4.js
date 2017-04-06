// The anonymous function below will fire on page load

// Some things to consider
// $.ajax(); to make your requests a little easier. Or the vanilla js way, it's up to you.
// $.on(); for event handling
// Remember, selecting elements in jQuery is like selecting them in CSS
// You'll probably have to manipulate some strings
// some jQuery functions to help display results
// $.show(), $.hide(), $.slideup(), $.slidedown(), $.fadein(), $.fadeout()
// Add content from requests with something like
// $.html(), $.text(), etc.
// keyup events could be helpful to get value of field as the user types

(function() {
  // Magic!
  console.log('Keepin\'n it clean with an external script!');
  var httpRequest;

  if (window.XMLHttpRequest) {
      httpRequest = new XMLHttpRequest();
    if (httpRequest.overrideMimeType) {
      httpRequest.overrideMimeType('text/xml');
    }
  }

  if (!httpRequest) {
    alert('Failed to initialize XMLHttpRequest');
    return false;
  }

  $('#mainForm .flexsearch-input').on('keyup', function(e) {
    console.log(e.currentTarget.value);
  });

})();

// vim: set sw=2 ts=2 sts=2:

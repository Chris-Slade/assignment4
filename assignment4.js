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
  var xhr;
  var suggestions = new Array();
  var apiUrl = 'http://www.mattbowytz.com/simple_api.json';

  console.log('Initializing search stuff');

  if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest({mozSystem: true});
    if (xhr.overrideMimeType) {
      xhr.overrideMimeType('text/json');
    }
  }

  if (!xhr) {
    alert('Failed to initialize XMLHttpRequest');
    return false;
  }

  // Get all the data from the API up front.
  xhr.open('GET', apiUrl + '?data=all');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      try {
        data = JSON.parse(xhr.responseText);
      }
      catch (err) {
        console.log('Error parsing API response: ' + err);
        return false;
      }
      for (var key in data.data) {
        var list = data.data[key];
        for (var i = 0; i < list.length; ++i) {
          suggestions.push(list[i]);
        }
      }
      suggestions = suggestions.map(function (s) { return s.toLowerCase(); });
      suggestions.sort();
      console.log('Loaded ' + suggestions.length + ' suggestions');
    }
  };
  xhr.send();

  $('#searchInput').on('keyup', function(e) {
    e.preventDefault();

    var suggestionList = $('#suggestions')[0];
    suggestionList.innerHTML = "";
    var input = e.currentTarget.value;

    if (input.length === 0) {
      return false;
    }

    console.log('Trying to find suggestions for ' + input);
    console.log(suggestions);
    for (var i = 0; i < suggestions.length; ++i) {
      if (suggestions[i].startsWith(input)) {
        suggestionList.insertAdjacentHTML(
          'beforeend',
          '<li>' + suggestions[i] + '</li>'
        );
      }
    }
  });

})();

// vim: set sw=2 ts=2 sts=2:

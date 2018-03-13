var ajax = require('@fdaciuk/ajax');
var app = require('ampersand-app');

var getFilms = function(page, collection) {
	ajax().get('https://api.themoviedb.org/3/discover/movie', {'api_key': 'c5e4a1733c2995102fafe209c014e4c0', 'page': page}).then(function (response, xhr) {
  		collection.addFilmsFromResponse(response.results);
	});
};

module.exports = {
	'getFilms': getFilms
};
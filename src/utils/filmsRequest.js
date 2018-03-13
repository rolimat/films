var ajax = require('@fdaciuk/ajax');
var app = require('ampersand-app');
var apiKey = require('../key');

var getFilms = function(page, collection) {
	ajax().get('https://api.themoviedb.org/3/discover/movie', {'api_key': apiKey, 'page': page}).then(function (response, xhr) {
  		collection.addFilmsFromResponse(response.results);
	});
};

module.exports = {
	'getFilms': getFilms
};
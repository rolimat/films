var FilmsCollection = require('ampersand-rest-collection');
var FilmModel = require('../models/film');
var FilmsRequest = require('../utils/filmsRequest')
var _ = require('underscore');

module.exports = FilmsCollection.extend({
	model: FilmModel,
	addFilmsFromResponse: function(films) {
		_.each(films, function(film) {
			this.add(new FilmModel(film));
		}, this);
	},
	getFilms: function(page) {
		FilmsRequest.getFilms(page || 1, this);
	}
});
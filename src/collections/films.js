import Collection from 'ampersand-rest-collection';
import FilmModel from '../models/film';
import getFilms from '../utils/filmsRequest';
import _ from 'underscore';

let FilmsCollection = Collection.extend({
	model: FilmModel,
	addFilmsFromResponse: function(films) {
		_.each(films, function(film) {
			this.add(new FilmModel(film));
		}, this);
	},
	getFilms: function(page) {
		getFilms(page || 1, this);
	}
});

export default FilmsCollection;

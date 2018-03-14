import Collection from 'ampersand-rest-collection';
import FilmModel from '../models/film';
import getFilms from '../utils/filmsRequest';
import _ from 'underscore';

let FilmsCollection = Collection.extend({
	model: FilmModel,
	currentPage: 1,
	addFilmsFromResponse: function(films) {
		let newModels = _.map(films, function(film) {
			return new FilmModel(film);
		});
		
		this.add(newModels);
	},
	getFilms: function(page) {
		getFilms(page || 1, this);
	},
	getNextPage: function() {
		this.currentPage++;
		this.getFilms(this.currentPage);
	},
	isEmpty: function() {
		return this.models.length < 1;
	}
});

export default FilmsCollection;

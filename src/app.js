var app = require('ampersand-app');
var Router = require('./utils/router');
var FilmsCollection = require('./collections/films');
var FilmsCollectionView = require('./views/filmsCollection');

app.extend({
	init: function() {
		this.collections = {
			'filmsCollection': new FilmsCollection()
		};
		this.views = {
			'filmsCollectionView': new FilmsCollectionView({
				collection: this.collections.filmsCollection
			})
		}
		this.router = new Router();
		


		this.router.history.start();
		//this.router.navigate('#details/10');
	}
});

window.onload = function() {
	app.init();
};
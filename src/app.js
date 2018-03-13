import App from 'ampersand-app';
import Router from './utils/router';
import FilmsCollection from './collections/films';
import FilmsCollectionView from './views/filmsCollection';

App.extend({
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
	App.init();
};
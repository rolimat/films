import App from 'ampersand-app';
import Router from './utils/router';
import FilmsCollection from './collections/films';
import FilmsCollectionView from './views/filmsCollection';

App.extend({
	init: function() {
		this.collections = {
			'filmsCollection': new FilmsCollection()
		};
		
		this.router = new Router();
		this.router.history.start();
	}
});

window.onload = function() {
	App.init();
};
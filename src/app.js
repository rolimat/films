import App from 'ampersand-app';
import Router from './utils/router';
import FilmsCollection from './collections/films';
import FilmsCollectionView from './views/filmsCollection';
import onInfiniteScroll from './utils/scrollListener';

App.extend({
	init: function() {
		this.collections = {
			'filmsCollection': new FilmsCollection()
		};
		
		this.router = new Router();
		this.router.history.start();

		onInfiniteScroll(this.collections.filmsCollection);
	}
});

window.onload = function() {
	App.init();
};
import View from 'ampersand-view';
import FilmView from './film';
import loadingTemplate from '../templates/loading.handlebars';

let FilmsCollectionView = View.extend({
	template: '<section id="films" class="cards"></section>',
	initialize: function() {
		this.listenTo(this.collection, 'add remove', this.render);
	},
	render: function() {
		if (this.collection.isEmpty()) {
			this.renderWithTemplate(this, loadingTemplate);
		} else {
			this.renderWithTemplate(this);
			this.renderCollection(this.collection, FilmView, this.el.querySelector('#films'));
		}
		
        return this;
	}
});

export default FilmsCollectionView;

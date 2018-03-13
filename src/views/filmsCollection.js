import View from 'ampersand-view';
import FilmView from './film';

let FilmsCollectionView = View.extend({
	template: '<div class="itemContainer"></div>',
	initialize: function() {
		this.listenTo(this.collection, 'change', this.render);
	},
	render: function() {
		this.renderWithTemplate(this);
		this.renderCollection(this.collection, FilmView, this.el.querySelector('.itemContainer'));
        return this;
	}
});

export default FilmsCollectionView;

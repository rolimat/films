var AmpersandView = require('ampersand-view');
var FilmView = require('./film');

module.exports = AmpersandView.extend({
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
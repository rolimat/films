import View from 'ampersand-view';
import _ from 'underscore';
import filmDetailsTemplate from '../templates/filmDetails.handlebars';


let FilmDetailsView = View.extend({
	template: filmDetailsTemplate,
	events: {
	},
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},
	render: function() {
		this.renderWithTemplate(this.model);	
		return this;	
	},
});

export default FilmDetailsView;

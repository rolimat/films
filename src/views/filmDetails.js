import View from 'ampersand-view';
import _ from 'underscore';
import filmDetailsTemplate from '../templates/filmDetails.handlebars';
import loadingTemplate from '../templates/loading.handlebars';


let FilmDetailsView = View.extend({
	template: filmDetailsTemplate,
	events: {
	},
	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
	},
	render: function() {
		if (this.model.isEmpty()) {
			this.renderWithTemplate(this, loadingTemplate);
		} else {
			this.renderWithTemplate(this.model);				
		}
		return this;	
	},
});

export default FilmDetailsView;

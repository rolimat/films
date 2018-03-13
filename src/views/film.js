import View from 'ampersand-view';
import _ from 'underscore';
import filmTemplate from '../templates/film.handlebars';


let AmpersandView = View.extend({
	template: filmTemplate,
	render: function() {
		this.renderWithTemplate(this.model);		
	}
});

export default AmpersandView;

import View from 'ampersand-view';
import _ from 'underscore';


let AmpersandView = View.extend({
	template: _.template('<div>title: <%= title %> </div>'),
	render: function() {
		this.renderWithTemplate(this.model);		
	}
});

export default AmpersandView;

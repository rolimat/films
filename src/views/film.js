var AmpersandView = require('ampersand-view');
var _ = require('underscore');

module.exports = AmpersandView.extend({
	template: _.template('<div>title: <%= title %> </div>'),
	render: function() {
		this.renderWithTemplate(this.model);		
	}
});
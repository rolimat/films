import App from 'ampersand-app';
import View from 'ampersand-view';
import _ from 'underscore';
import filmTemplate from '../templates/film.handlebars';


let FilmView = View.extend({
	template: filmTemplate,
	events: {
		'click .film_wrapper': 'onClickFilm'
	},
	render: function() {
		this.renderWithTemplate(this.model);		
	},
	onClickFilm: function() {
		const id = this.model.get('id');
		App.router.navigate(`#details/${id}`);
	},
});

export default FilmView;

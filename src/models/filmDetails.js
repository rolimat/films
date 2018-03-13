import Model from 'ampersand-model';
import apiKey from '../key';

let FilmDetailsModel = Model.extend({
	props: {
        id: 'number',
        title: 'string',
    },
    url: function() {
    	const id = this.get('id');
    	return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    },
});

export default FilmDetailsModel;

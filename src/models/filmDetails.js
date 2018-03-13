import Model from 'ampersand-model';
import apiKey from '../key';

let FilmDetailsModel = Model.extend({
	props: {
		adult: 'boolean',
		backdrop_path: 'string',
		budget: 'number',
		genres: 'array',
		homepage: 'string',
        id: 'number',
        overview: 'string',
        popularity: 'number',
        poster_path: 'string',
        production_companies: 'array',
        production_countries: 'array',
        release_date: 'date',
        revenue: 'number',
        status: 'string',
        tagline: 'string',
        title: 'string',
        vote_average: 'number',
        vote_count: 'number'
    },
    url: function() {
    	const id = this.get('id');
    	return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    },
});

export default FilmDetailsModel;

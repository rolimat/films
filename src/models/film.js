import Model from 'ampersand-model';

let FilmModel = Model.extend({
	props: {
		adult: 'boolean',
		backdrop_path: 'string',
        id: 'number',
        overview: 'string',
        poster_path: 'string',
        release_date: 'string',
        title: 'string',
        vote_average: 'number',
        vote_count: 'number'
    },
});

export default FilmModel;

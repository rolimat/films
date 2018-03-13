import Model from 'ampersand-model';

let FilmModel = Model.extend({
	props: {
        id: 'number',
        overview: 'string',
        poster_path: 'string',
        release_date: 'date',
        title: 'string',
        vote_average: 'number',
    },
});

export default FilmModel;

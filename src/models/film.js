var FilmModel = require('ampersand-model');


module.exports = FilmModel.extend({
	props: {
        id: 'number',
        overview: 'string',
        poster_path: 'string',
        release_date: 'date',
        title: 'string',
        vote_average: 'number',
    },
});
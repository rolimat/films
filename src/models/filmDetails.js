import Model from 'ampersand-model';

let FilmDetailsModel = Model.extend({
	props: {
        id: 'number',
        title: 'string',
    },
});

export default FilmDetailsModel;

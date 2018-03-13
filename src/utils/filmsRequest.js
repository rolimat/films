import ajax from '@fdaciuk/ajax';
import apiKey from '../key';

export default function getFilms(page, collection) {
	ajax().get('https://api.themoviedb.org/3/discover/movie', {'api_key': apiKey, 'page': page}).then(function (response, xhr) {
  		collection.addFilmsFromResponse(response.results);
	});
};
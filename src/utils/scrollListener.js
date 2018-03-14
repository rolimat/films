import _ from 'underscore';
import App from 'ampersand-app';

let last_known_scroll_position = 0;
let ticking = false;

let updateCollection = function(scroll){
	const limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
	
	if (scroll  > limit * 0.9) {
		App.collections.filmsCollection.getNextPage();
	}
};

let onInfiniteScroll = function(evt) {
	last_known_scroll_position = window.scrollY;
	if (!ticking) {
		window.requestAnimationFrame(function() {
    		_.debounce(updateCollection(last_known_scroll_position), 500);
  			ticking = false;
		});
	}
	ticking = true;
};

export default function bindInfiniteScroll() {
	window.addEventListener('scroll', onInfiniteScroll);
};

export function unBindInfiniteScroll() {
	window.removeEventListener('scroll', onInfiniteScroll);
};
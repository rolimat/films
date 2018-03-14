import App from 'ampersand-app';
import _ from 'underscore';

let lastKnownScrollPosition = 0;
let ticking = false;

let updateCollection = function(scroll){
	const limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
	
	if (scroll  > limit * 0.9) {
		App.collections.filmsCollection.getNextPage();
	}
};

let onInfiniteScroll = function(evt) {
	lastKnownScrollPosition = window.scrollY;
	if (!ticking) {
		window.requestAnimationFrame(function() {
    		_.debounce(updateCollection(lastKnownScrollPosition), 500);
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
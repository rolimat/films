let last_known_scroll_position = 0;
let ticking = false;

let updateCollection = function(scroll, collection){
	const limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, 
                   document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
	
	if (scroll  > limit * 0.8) {
		collection.getNextPage();
	}
};

export default function onInfiniteScroll(collection) {
	window.addEventListener('scroll', function(e) {
		last_known_scroll_position = window.scrollY;
		if (!ticking) {
			window.requestAnimationFrame(function() {
	    		updateCollection(last_known_scroll_position, collection);
	  			ticking = false;
			});
		}
		ticking = true;
	});
};
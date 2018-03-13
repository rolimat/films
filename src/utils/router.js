import App from 'ampersand-app';
import AmpersandRouter from 'ampersand-router';
import FilmDetailsModel from '../models/filmDetails';
import FilmDetailsView from '../views/filmDetails';
import FilmsCollectionView from '../views/filmsCollection';

let clearMainContentArea = function() {
  let node = document.querySelector('#content');
  let cNode = node.cloneNode(false);
  node.parentNode.replaceChild(cNode ,node);
};

let Router = AmpersandRouter.extend({

  routes: {
    '': 'list',
    'list': 'list',
    'details/:id': 'details',
  },

  list: function() {
    let filmsCollectionView = new FilmsCollectionView({
        collection: App.collections.filmsCollection
      });
    filmsCollectionView.render()
    clearMainContentArea();
    document.querySelector('#content').appendChild(filmsCollectionView.el);
    App.collections.filmsCollection.getFilms();
  },

  details: function(id) {
    let filmDetailsModel = new FilmDetailsModel({'id': parseInt(id, 10)});
    let filmDetailsView = new FilmDetailsView({model: filmDetailsModel});
    filmDetailsView.render();
    clearMainContentArea();
    document.querySelector('#content').appendChild(filmDetailsView.el);
  }

});

export default Router;

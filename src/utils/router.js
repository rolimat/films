import App from 'ampersand-app';
import AmpersandRouter from 'ampersand-router';
import ViewSwitcher from 'ampersand-view-switcher';
import FilmDetailsModel from '../models/filmDetails';
import FilmDetailsView from '../views/filmDetails';
import FilmsCollectionView from '../views/filmsCollection';

let clearMainContentArea = function() {
  let node = document.querySelector('#content');
  let cNode = node.cloneNode(false);
  node.parentNode.replaceChild(cNode ,node);
};

let switchView = function(view) {
  clearMainContentArea();
  document.querySelector('#content').appendChild(view.render().el);
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
    App.collections.filmsCollection.getFilms();
    switchView(filmsCollectionView);
  },

  details: function(id) {
    let filmDetailsModel = new FilmDetailsModel({'id': parseInt(id, 10)});
    let filmDetailsView = new FilmDetailsView({model: filmDetailsModel});
    filmDetailsModel.fetch();
    switchView(filmDetailsView);
  }

});

export default Router;

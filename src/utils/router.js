import App from 'ampersand-app';
import AmpersandRouter from 'ampersand-router';

let Router = AmpersandRouter.extend({

  routes: {
    '': 'list',
    'list': 'list',
    'details/:id': 'details',
  },

  list: function() {
    App.views.filmsCollectionView.render();
    document.querySelector('#content').appendChild(App.views.filmsCollectionView.el);
    App.collections.filmsCollection.getFilms();
  },

  details: function(id) {
    console.log('DETAILS! -> ' + id);
  }

});

export default Router;

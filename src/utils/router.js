var AmpersandRouter = require('ampersand-router');
var app = require('ampersand-app');

module.exports = AmpersandRouter.extend({

  routes: {
    '': 'list',
    'list': 'list',
    'details/:id': 'details',
  },

  list: function() {
    app.views.filmsCollectionView.render();
    document.querySelector('#content').appendChild(app.views.filmsCollectionView.el);
    app.collections.filmsCollection.getFilms();
  },

  details: function(id) {
    console.log('DETAILS! -> ' + id);
  }

});
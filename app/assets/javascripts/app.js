(function () {
  
  'use strict'

  angular
    .module('discCaddy', ['ngMessages', 'templates', 'Devise', 'ui.router', 'ui.bootstrap'])
    .config(function($httpProvider) {
      // for CSRF errors
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
    })

}());
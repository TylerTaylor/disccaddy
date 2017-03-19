(function () {
  
  'use strict'

  angular
    .module('discCaddy', ['ngMessages', 'templates', 'Devise', 'ui.router', 'ui.bootstrap'])
    .config(function($httpProvider) {
      // for CSRF errors
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
    })

  angular.module('discCaddy').run(function($rootScope, $state, Auth) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
      if (toState.authenticate && !Auth.isAuthenticated()) {
        // User isn't authenticated
        $state.transitionTo('users.signIn');
        event.preventDefault();
      }
    })
  })

}());
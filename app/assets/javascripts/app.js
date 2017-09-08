(function () {

  'use strict'

  angular
    .module('discCaddy', ['ngMessages', 'templates', 'Devise', 'ui.router', 'ui.bootstrap', 'ngCookies'])
    .config(function($httpProvider) {
      // for CSRF errors
      $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
    })

  angular.module('discCaddy').run(function($rootScope, $state, Auth, $cookies) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
      // if (toState.authenticate && !Auth.isAuthenticated()) {

      var user = $cookies.getObject('currentUser')

      if (toState.authenticate && !user) {
        // User isn't authenticated
        $state.go('users.signIn');
        event.preventDefault();
      }
    })
  })

}());

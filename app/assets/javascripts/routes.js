(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home/home.html',
          controller: 'HomeController as vm'
        })
        .state('discs', {
          url: '/discs',
          templateUrl: 'discs/discs.html',
          controller: 'DiscsController as vm'
        })
        .state('discs.myBag', {
          url: '/mybag',
          templateUrl: 'discs/my_bag.html',
          controller: 'DiscsController as vm'
        })
        .state('discs.allDiscs', {
          url: '/alldiscs',
          templateUrl: 'discs/all_discs.html',
          controller: 'DiscsController as vm'
        })
        .state('users', {
          abstract: true,
          url: '/users',
          templateUrl: 'users/users.html'
        })
        .state('users.signIn', {
          url: '/users/signin',
          templateUrl: 'users/sign_in.html'
        })

      $urlRouterProvider.otherwise('/')
    })

}());
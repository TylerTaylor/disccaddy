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
          abstract: true,
          url: '/discs',
          templateUrl: 'discs/discs.html',
          controller: 'DiscsController as vm',
          resolve: {
            discs: function (DiscFactory) {
              return DiscFactory.getDiscs()
            },
            user: function(Auth) {
              return Auth.currentUser()
            }
          }
        })
        .state('discs.detail', {
          url: '/discName?discId',
          templateUrl: 'discs/detail.html',
          controller: 'DiscDetailController as vm',
          resolve: {
            disc: function (DiscFactory, $stateParams) {
              return DiscFactory.getDisc($stateParams.discId)
            }
          }
        })
        .state('discs.myBag', {
          url: '/users/:id/mybag',
          templateUrl: 'discs/my_bag.html',
          controller: 'MyBagController as vm'
        })
        .state('discs.allDiscs', {
          url: '',
          templateUrl: 'discs/all_discs.html',
          controller: 'DiscsController as vm'
        })
        .state('users', {
          abstract: true,
          url: '/users',
          templateUrl: 'users/users.html',
          controller: 'UsersController as vm'
        })
        .state('users.signIn', {
          url: '/signin',
          templateUrl: 'users/sign_in.html',
          onEnter: ['$state', 'Auth', function($state, Auth) {
            Auth.currentUser().then(function (){
              console.log("Redirecting because I'm logged in already!")
              $state.go('home');
            })
          }]
        })
        .state('users.register', {
          url: '/register',
          templateUrl: 'users/register.html'
        })

      $urlRouterProvider.otherwise('/')
    })

}());
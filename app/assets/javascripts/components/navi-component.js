(function () {
  'use strict'

  var Navi = {
    // bindings: {
    //   username: '<'
    // },
    templateUrl: '/assets/components/navi.html',
    controller: 'UsersController',
    controllerAs: 'users'
  }

  angular
    .module('discCaddy')
    .component('navi', Navi)

}());

(function () {
  'use strict'
  
  var Navi = {
    templateUrl: '/assets/components/navi.html',
    controller: 'UsersController',
    controllerAs: 'vm'
  }

  angular
    .module('discCaddy')
    .component('navi', Navi)

}());
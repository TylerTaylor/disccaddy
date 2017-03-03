(function () {
  'use strict'
  
  var Panel = {
    bindings: {
      name: '<',
      filteredList: '=',
      page: '='
    },
    templateUrl: '/assets/components/panel.html'
  }

  angular
    .module('discCaddy')
    .component('panel', Panel)

}());
(function () {
  'use strict'

  var Panel = {
    bindings: {
      disc: '=',
      user: '='
    },
    templateUrl: '/assets/components/panel.html'
  }

  angular
    .module('discCaddy')
    .component('panel', [Panel])

}());

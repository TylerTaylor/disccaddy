(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('DiscsController', ['Auth', '$rootScope', '$location', '$state', 'DiscFactory', '$filter',DiscsController])

    function DiscsController(Auth, $rootScope, $location, $state, DiscFactory, $filter, discs) {
      var vm = this

      vm.discs = []

      DiscFactory.getDiscs()
                 .then(setDiscs)

      function setDiscs(data) {
        vm.discs = data
        vm.refilter()
      }

      vm.search = ''

      vm.refilter = function () {
        vm.filteredList = $filter('filter')(vm.discs, vm.search)
      }

      vm.refilter()

    }

}());
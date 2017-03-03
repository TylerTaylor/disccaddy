(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('DiscsController', ['Auth', 
                                    '$rootScope', 
                                    'DiscFactory', 
                                    '$filter', 
                                    'discs', 
                                    '$stateParams',
                                    DiscsController])

  function DiscsController(Auth, $rootScope, DiscFactory, $filter, discs, $stateParams) {
    var vm = this
    vm.discs = discs

    vm.page = 1

    vm.search = ''

    vm.refilter = function () {
      vm.filteredList = $filter('filter')(vm.discs, vm.search)
    }

    vm.refilter()

  }

}());
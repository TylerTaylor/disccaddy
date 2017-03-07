(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('DiscsController', ['$filter', 
                                    'discs',
                                    'user',
                                    '$stateParams',
                                    DiscsController])

  function DiscsController($filter, discs, user, $stateParams) {
    var vm = this
    vm.discs = discs
    vm.refilter = refilter
    vm.page = 1

    vm.search = ''

    function refilter() {
      vm.filteredList = $filter('filter')(vm.discs, vm.search)
    }

    vm.refilter()

  }

}());
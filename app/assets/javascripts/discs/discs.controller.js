(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('DiscsController', ['$filter', 
                                    'discs',
                                    DiscsController])

  function DiscsController($filter, discs) {
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
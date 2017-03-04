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

    vm.page = 1

    vm.search = ''

    vm.refilter = function () {
      vm.filteredList = $filter('filter')(vm.discs, vm.search)
    }

    vm.checkParams = function () {
      console.log($stateParams)
    }

    vm.refilter()

  }

}());
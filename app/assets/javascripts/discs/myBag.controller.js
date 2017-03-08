(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('MyBagController', ['$filter', 
                                    'discs',
                                    'myDiscs',
                                    'user',
                                    '$stateParams',
                                    MyBagController])

  function MyBagController($filter, discs, myDiscs, user, $stateParams) {
    var vm = this
    vm.refilter = refilter
    vm.discs = discs
    vm.myDiscs = myDiscs

    vm.page = 1

    vm.search = ''

    function refilter() {
      vm.filteredList = $filter('filter')(vm.myDiscs, vm.search)
    }

    vm.refilter()

  }

}());
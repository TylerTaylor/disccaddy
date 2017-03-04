(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('MyBagController', ['$filter', 
                                    'discs',
                                    'myDiscs',
                                    'user',
                                    MyBagController])

  function MyBagController($filter, discs, myDiscs, user) {
    var vm = this
    vm.discs = discs
    vm.myDiscs = myDiscs

    vm.page = 1

    vm.search = ''

    vm.refilter = function () {
      vm.filteredList = $filter('filter')(vm.discs, vm.search)
    }

    vm.refilter()

  }

}());
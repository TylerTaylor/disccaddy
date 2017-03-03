(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('MyBagController', ['$filter', 
                                    'discs',
                                    'user',
                                    MyBagController])

  function MyBagController($filter, discs, user) {
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
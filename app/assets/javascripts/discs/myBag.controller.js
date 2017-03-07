(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('MyBagController', ['$filter', 
                                    'discs',
                                    'myDiscs',
                                    'user',
                                    '$stateParams',
                                    'discToAdd',
                                    MyBagController])

  function MyBagController($filter, discs, myDiscs, user, $stateParams, discToAdd) {
    var vm = this
    vm.refilter = refilter
    vm.discs = discs
    vm.myDiscs = myDiscs
    vm.discToAdd = discToAdd

    vm.page = 1

    vm.search = ''

    function refilter() {
      vm.filteredList = $filter('filter')(vm.myDiscs, vm.search)
    }

    console.log($stateParams)

    console.log("The disc we will be adding is:")
    console.log(discToAdd)

    vm.refilter()

  }

}());
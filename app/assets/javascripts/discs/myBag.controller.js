(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('MyBagController', ['$filter', 
                                    'discs',
                                    'myDiscs',
                                    'user',
                                    '$stateParams',
                                    '$anchorScroll',
                                    MyBagController])

  function MyBagController($filter, discs, myDiscs, user, $stateParams, $anchorScroll) {
    var vm = this
    vm.refilter = refilter
    vm.discs = discs
    vm.myDiscs = myDiscs
    vm.pageChanged = pageChanged

    vm.page = 1

    vm.search = ''

    function refilter() {
      vm.filteredList = $filter('filter')(vm.myDiscs, vm.search)
    }

    function pageChanged() {
      $('.discs-list').scrollTop(0)
      $anchorScroll();
    }

    vm.refilter()

  }

}());
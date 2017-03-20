(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('MyBagController', ['$filter', 
                                    'discs',
                                    'myDiscs',
                                    '$anchorScroll',
                                    'DiscFactory',
                                    'user',
                                    '$timeout',
                                    MyBagController])

  function MyBagController($filter, discs, myDiscs, $anchorScroll, DiscFactory, user, $timeout) {
    var vm = this
    vm.refilter = refilter
    vm.discs = discs
    vm.myDiscs = myDiscs
    vm.pageChanged = pageChanged
    vm.removeDisc = removeDisc
    vm.user = user

    vm.page = 1

    vm.search = ''

    function refilter() {
      vm.filteredList = $filter('filter')(vm.myDiscs, vm.search)
    }

    function pageChanged() {
      $('.discs-list').scrollTop(0)
      $anchorScroll();
    }

    function removeDisc(disc) {
      if (confirm("Are you sure you want to remove this disc?")) {
        DiscFactory.removeFromBag(disc.id, vm.user.id)
        vm.myDiscs = $filter('filter')(vm.myDiscs, {id: !disc.id})
        vm.refilter()
      }
    }

    vm.refilter()

  }

}());
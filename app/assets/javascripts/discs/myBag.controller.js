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
                   // .then(refreshDiscs())

        $timeout(function() {
          refreshDiscs()
        }, 500)
      }
    }

    function refreshDiscs() {
      DiscFactory.getUserDiscs(vm.user.id)
                 .then(function(response){
                   vm.myDiscs = response
                   vm.refilter()
                 })
    }

    vm.refilter()

  }

}());
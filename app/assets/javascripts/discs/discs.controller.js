(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('DiscsController', ['Auth', '$rootScope', '$location', '$state', 'DiscFactory', '$filter', 'discs', DiscsController])

    function DiscsController(Auth, $rootScope, $location, $state, DiscFactory, $filter, discs) {
      var vm = this
      vm.discs = discs
      var POSTS_PER_PAGE = 30

      // vm.page = 0
      // vm.totalDiscs = vm.discs.data.length
      // vm.totalPages = Math.ceil(vm.totalDiscs / POSTS_PER_PAGE)



      vm.search = ''

      vm.refilter = function () {
        vm.filteredList = $filter('filter')(vm.discs, vm.search)
      }

      vm.refilter()

    }

}());
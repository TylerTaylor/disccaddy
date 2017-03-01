(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('DiscsController', ['Auth', '$rootScope', '$location', '$state', 'DiscFactory', '$filter', 'discs', DiscsController])

    function DiscsController(Auth, $rootScope, $location, $state, DiscFactory, $filter, discs) {
      var vm = this
      // vm.discs = discs
      var DISCS_PER_PAGE = 30

      vm.page = 0
      vm.totalDiscs = discs.length
      vm.totalPages = Math.ceil(vm.totalDiscs / DISCS_PER_PAGE)

      vm.paginateDiscs = function () {
        vm.discs = discs.slice(vm.page * DISCS_PER_PAGE, (vm.page + 1) * DISCS_PER_PAGE)
      }

      vm.previousPage = function () {
        vm.page--
        vm.paginateDiscs()
      }

      vm.nextPage = function () {
        vm.page++
        vm.paginateDiscs()
      }

      vm.paginateDiscs()

      // vm.search = ''

      // vm.refilter = function () {
      //   vm.filteredList = $filter('filter')(vm.discs, vm.search)
      // }

      // vm.refilter()

    }

}());
(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('DiscsController', ['Auth', '$rootScope', '$location', '$scope', 'DiscFactory', '$filter', 'discs', DiscsController])

    function DiscsController(Auth, $rootScope, $location, $scope, DiscFactory, $filter, discs) {
      var vm = this
      vm.discs = discs
      // var DISCS_PER_PAGE = 30

      vm.page = 1
      // vm.totalDiscs = discs.length
      // vm.totalPages = Math.ceil(vm.totalDiscs / DISCS_PER_PAGE)

      // vm.paginateDiscs = function () {
      //   vm.discs = discs.slice(vm.page * DISCS_PER_PAGE, (vm.page + 1) * DISCS_PER_PAGE)
      //   vm.refilter()
      // }

      // vm.previousPage = function () {
      //   vm.page--
      //   vm.paginateDiscs()
      // }

      // vm.nextPage = function () {
      //   vm.page++
      //   vm.paginateDiscs()
      // }

      vm.search = ''

      vm.refilter = function () {
        vm.filteredList = $filter('filter')(vm.discs, vm.search)
      }

      vm.pageChanged = function() {
        var startPos = (vm.page) * 30;
        //$scope.displayItems = $scope.totalItems.slice(startPos, startPos + 3);
        console.log(vm.page);
      };

      // vm.paginateDiscs()
      vm.refilter()

    }

}());
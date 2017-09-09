(function () {

  'use strict'

  angular
    .module('discCaddy')
    // .controller('DiscsController', ['$filter',
    //                                 'discs',
    //                                 '$stateParams',
    //                                 '$anchorScroll',
    //                                 DiscsController])
    .controller('DiscsController', DiscsController);

  DiscsController.$inject = ['$filter', 'discs', '$stateParams', '$anchorScroll'];

  function DiscsController($filter, discs, $stateParams, $anchorScroll) {
    var vm = this
    vm.discs = discs
    vm.refilter = refilter
    vm.pageChanged = pageChanged
    vm.page = 1

    vm.search = ''

    function refilter() {
      vm.filteredList = $filter('filter')(vm.discs, vm.search)
    }

    function pageChanged() {
      $('.discs-list').scrollTop(0)
      $anchorScroll();
    }

    vm.refilter()

  }

}());

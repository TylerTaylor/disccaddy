(function () {

  'use strict'

  angular
    .module('discCaddy')
    // .controller('DiscDetailController', ['disc',
    //                                       DiscsController])
    .controller('DiscDetailController', DiscsController);

  DiscsController.$inject = ['disc'];

  function DiscsController(disc) {
    var vm = this
    vm.disc = disc
  }

}());

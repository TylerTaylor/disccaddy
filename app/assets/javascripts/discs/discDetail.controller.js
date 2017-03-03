(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('DiscDetailController', ['disc',
                                          DiscsController])

  function DiscsController(disc) {
    var vm = this
    vm.disc = disc
  }

}());
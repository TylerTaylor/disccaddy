(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('DiscAddController', [
                                    // 'myDiscs',
                                    'user',
                                    '$stateParams',
                                    'discToAdd',
                                    DiscAddController])

  function DiscAddController(user, $stateParams, discToAdd) {
    var vm = this
    // vm.discs = discs
    // vm.myDiscs = myDiscs
    vm.discToAdd = discToAdd
    vm.weightRange = weightRange()

    function weightRange() {
      var low = discToAdd.low_weight
      var high = discToAdd.high_weight
      var weights = []

      while (low <= high) {
        weights.push(low)
        low++
      }

      return weights
    }

    // console.log(vm.weightRange)

  }

}());
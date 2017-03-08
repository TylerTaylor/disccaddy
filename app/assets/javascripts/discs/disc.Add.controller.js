(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('DiscAddController', [
                                    // 'myDiscs',
                                    'user',
                                    '$stateParams',
                                    'discToAdd',
                                    'DiscFactory',
                                    '$location',
                                    DiscAddController])

  function DiscAddController(user, $stateParams, discToAdd, DiscFactory, $location) {
    var vm = this
    vm.user = user
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

    vm.selectWeight = function() {
        console.log(vm.selectedWeight)
    }

    vm.addToBag = function() {
        DiscFactory.addToBag(vm.discToAdd.id, vm.user.id)
        $location.path('/discs/users/' + vm.user.id + '/mybag')
    }

  }

}());
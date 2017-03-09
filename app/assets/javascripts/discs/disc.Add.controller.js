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
                                    '$state',
                                    DiscAddController])

  function DiscAddController(user, $stateParams, discToAdd, DiscFactory, $location, $state) {
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
        return vm.selectedWeight
    }

    vm.addToBag = function() {
        DiscFactory.addToBag(vm.discToAdd.id, vm.user.id, vm.selectedWeight)
        $location.path('/discs/users/' + vm.user.id + '/mybag')
        // $state.reload()
        // $state.go('discs.myBag', {'id': vm.user.id})
    }

  }

}());
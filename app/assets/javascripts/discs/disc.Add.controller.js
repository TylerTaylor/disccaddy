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
                                    '$timeout',
                                    DiscAddController])

  function DiscAddController(user, $stateParams, discToAdd, DiscFactory, $location, $timeout) {
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
        return vm.selectedWeight || vm.typedWeight
    }

    vm.addToBag = function() {
      DiscFactory.addToBag(vm.discToAdd.id, vm.user.id, vm.selectWeight())
                 // .then($location.path('/discs/users/' + vm.user.id + '/mybag'))
      // relocate()
      $timeout(function() {
        $location.path('/discs/users/' + vm.user.id + '/mybag')
      }, 500)
      // $state.reload()
      // $state.go('discs.myBag', {'id': vm.user.id})
    }

  }

}());
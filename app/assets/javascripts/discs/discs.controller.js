(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('DiscsController', DiscsController)

    function DiscsController(Auth, $rootScope) {
      var vm = this

      vm.greeting = "Hey you made it"

      Auth.currentUser()
        .then(function(user) {
          $rootScope.currentUser = user
        }, function(error) {
          console.log(error)
        })
    }

}());
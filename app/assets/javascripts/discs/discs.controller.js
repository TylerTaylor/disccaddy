(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('DiscsController', DiscsController)

    function DiscsController(Auth, $rootScope, $location, $state) {
      var vm = this
      // vm.logout = Auth.logout
      vm.logout = myLogout

      console.log("Location:")
      console.log($location)
      console.log(" ")

      Auth.currentUser()
        .then(function(user) {
          $rootScope.currentUser = user
        }, function(error) {
          console.log(error)
        })
      
      function myLogout() {
        Auth.logout()
        $location.path('/').replace()
        // $state.reload()

      }
    }

}());
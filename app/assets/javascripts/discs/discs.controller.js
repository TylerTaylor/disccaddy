(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('DiscsController', DiscsController)

    function DiscsController(Auth, $rootScope, $location, $state) {
      var vm = this
      // vm.logout = Auth.logout
      vm.logout = myLogout
      vm.thisisdiscscontroller = thisisdiscscontroller


      console.log("Location:")
      console.log($location)
      console.log(" ")

      Auth.currentUser()
        .then(function(user) {
          $rootScope.currentUser = user
        }, function(error) {
          console.log(error)
        })

      function thisisdiscscontroller() {
        console.log("This is the discs controller")
        console.log("The current user is: ")
        console.log($rootScope.currentUser)
      }

      // thisisdiscscontroller()
      
      function myLogout() {
        Auth.logout()
        $location.path('/').replace()
        // $state.reload()

      }
    }

}());
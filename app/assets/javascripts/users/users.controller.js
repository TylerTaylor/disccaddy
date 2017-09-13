(function () {

  'use strict'

  angular
    .module('discCaddy')
    // .controller('UsersController', ['Auth', '$rootScope', '$state',
    //                                 '$scope', '$window', '$cookies', UsersController])
    .controller('UsersController', UsersController);

    UsersController.$inject = ["Auth", "$rootScope", "$state", "$scope", "$window", "$cookies"];

    function UsersController(Auth, $rootScope, $state, $scope, $window, $cookies) {
      var vm = this
      vm.login = login
      // vm.logout = Auth.logout
      vm.register = register
      vm.username = {}

      $scope.signedIn = Auth.isAuthenticated
      $scope.logout = Auth.logout

      // does this ever get called??

      // Check for current user
      Auth.currentUser()
        .then(function(user) {
          $rootScope.currentUser = user
          vm.username = user.username
        }, function(error) {
          console.log(error)
        })

      // Login
      function login() {
        var config = {
          headers: {
            'X-HTTP-Method-Override': 'POST'
          }
        }

        Auth.login(vm.userForm, config)
          .then(function(user) {
            $rootScope.currentUser = user // this is being lost on refresh
            vm.username = user.username
            $cookies.putObject("currentUser", user)

            console.log("Just successfully signed in via users controller, now redirecting")
            $state.go('home')
            $state.reload()
          }, function(error) {
            console.log(error)
          })
      } // end login()

      // Register
      function register() {
        var config = {
          headers: {
            'X-HTTP-Method-Override': 'POST'
          }
        }

        Auth.register(vm.newUser, config)
          .then(function(registeredUser) {
            $rootScope.currentUser = registeredUser
            vm.username = registeredUser.username

            console.log("We are in the Auth.register function...redirecting home?")
            $state.go('home')
          }, function(error) {
            console.log(error)
          })
      } // end register()

      // Listen for logout event and handle everything here
      $rootScope.$on('devise:logout', function(event, user) {
        $rootScope.currentUser = {}
        $cookies.remove('currentUser')
        $state.reload()
        $state.go('home')
      })
    }

}());

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

      Auth.currentUser()
        .then(function(user) {
          $rootScope.currentUser = user
          vm.username = user.username
        }, function(error) {
          console.log(error)
        })

      function login() {
        var config = {
          headers: {
            'X-HTTP-Method-Override': 'POST'
          }
        }

        Auth.login(vm.userForm, config)
          .then(function(user) {
            $rootScope.currentUser = user // this is being lost on refresh
            $cookies.putObject("currentUser", user)

            console.log("Just successfully signed in via users controller, now redirecting")
            $state.reload()
          }, function(error) {
            console.log(error)
          })
      }

      function register() {
        var config = {
          headers: {
            'X-HTTP-Method-Override': 'POST'
          }
        }

        Auth.register(vm.newUser, config)
          .then(function(registeredUser) {
            $rootScope.currentUser = registeredUser
          }, function(error) {
            console.log(error)
          })
      }

      $rootScope.$on('devise:logout', function(event, user) {
        $rootScope.currentUser = {}
        $cookies.remove('currentUser')
        $state.go('home')
      })
    }

}());

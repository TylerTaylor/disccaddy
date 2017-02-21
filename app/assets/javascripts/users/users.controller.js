(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('UsersController', UsersController)

    function UsersController(Auth, $rootScope) {
      var vm = this
      vm.login = login
      vm.logout = Auth.logout
      vm.register = register
      vm.broccoli = broc

      function broc() {
        debugger
      }

      Auth.currentUser()
        .then(function(user) {
          $rootScope.currentUser = user
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
            $rootScope.currentUser = user
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
      })
    }

}());
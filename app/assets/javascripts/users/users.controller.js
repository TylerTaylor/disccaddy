(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('UsersController', UsersController)

    function UsersController(Auth, $rootScope, $state) {
      var vm = this
      vm.login = login
      vm.logout = Auth.logout
      vm.register = register
      vm.thisisuserscontroller = thisisuserscontroller

      function thisisuserscontroller() {
        console.log('This is the users controller')
      }

      thisisuserscontroller()

      Auth.currentUser()
        .then(function(user) {
          $rootScope.currentUser = user
          console.log("The current user is: ")
          console.log($rootScope.currentUser)
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
            console.log("Just successfully signed in via users controller, now redirecting")
            $state.go('home')
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
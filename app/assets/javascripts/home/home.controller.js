(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('HomeController', HomeController)

    function HomeController(Auth, $rootScope) {
      var vm = this
      vm.login = login
      vm.logout = Auth.logout
      vm.register = register

      // var credentials = {
      //   username: 'tyler',
      //   email: 'ty@test.com',
      //   password: 'password'
      // }

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
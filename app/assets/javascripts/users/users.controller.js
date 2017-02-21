(function () {
  
  'use strict'

  angular
    .module('discCaddy')
    .controller('UsersController', UsersController)

    function UsersController(Auth, $rootScope) {
      var vm = this

      vm.name = 'users'

      Auth.currentUser()
        .then(function(user) {
          $rootScope.currentUser = user
        }, function(error) {
          console.log(error)
        })
    }

}());
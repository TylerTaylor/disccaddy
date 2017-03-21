(function () {
  'use strict'
  
  angular
    .module('discCaddy')
    .factory('DiscFactory', ['$http', function($http) {

      return {
        getDiscs: getDiscs,
        getDisc: getDisc,
        getUserDiscs: getUserDiscs,
        addToBag: addToBag,
        removeFromBag: removeFromBag
      }

      // hits the #index method in discs_controller.rb
      function getDiscs() {
        return $http.get('/api/discs')
                    .then(handleResponse)
      }

      // hits the #show method in discs_controller.rb
      function getDisc(id) {
        return $http.get('/api/discs/' + id)
                    .then(handleResponse)
      }

      // hits the #my_bag method in discs_controller.rb
      function getUserDiscs(userId) {
        return $http.get('/api/users/' + userId + '/discs')
                    .then(handleResponse)  
      }

      // hits the #add_to_bag method in discs_controller.rb
      function addToBag(discId, userId, discWeight) {
        return $http.post('/api/users/' + userId + '/discs/add_to_bag/' + discId, { weight: discWeight })
      }

      function removeFromBag(discId, userId) {
        // /api/users/:user_id/discs/:disc_id/remove_disc
        return $http.delete('/api/users/' + userId + '/discs/' + discId + '/remove_disc')
                    .then(getUserDiscs(userId))
      }

      function handleResponse(response) {
        return response.data
      } 

    }])

}());
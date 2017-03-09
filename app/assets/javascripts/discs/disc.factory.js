(function () {
  'use strict'
  
  angular
    .module('discCaddy')
    .factory('DiscFactory', ['$http', function($http) {

      return {
        getDiscs: getDiscs,
        getDisc: getDisc,
        getUserDiscs: getUserDiscs,
        addToBag: addToBag
      }

      function getDiscs() {
        return $http.get('/api/discs')
                    .then(handleResponse)
      }

      function getDisc(id) {
        return $http.get('/api/discs/' + id)
                    .then(handleResponse)
      }

      function getUserDiscs(userId) {
        return $http.get('/api/users/' + userId + '/discs')
                    .then(handleResponse)  
      }

      function addToBag(discId, userId, discWeight) {
        return $http.post('/api/users/' + userId + '/discs/add_to_bag/' + discId, { weight: discWeight })
      }

      function handleResponse(response) {
        return response.data
      } 

    }])

}());
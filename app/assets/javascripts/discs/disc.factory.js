(function () {
  'use strict'
  
  angular
    .module('discCaddy')
    .factory('DiscFactory', ['$http', function($http) {

      return {
        getDiscs: getDiscs,
        getDisc: getDisc,
        getUserDiscs: getUserDiscs
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
        
      }

      function handleResponse(response) {
        return response.data
      } 

    }])

}());
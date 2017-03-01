(function () {
  'use strict'
  
  angular
    .module('discCaddy')
    .factory('DiscFactory', ['$http', function($http) {

      return {
        getDiscs: getDiscs,
        getDisc: getDisc
      }

      function getDiscs() {
        return $http.get('/api/discs')
                    .then(handleResponse)
                    
        function handleResponse(response) {
          return response.data
        } 
      }

      function getDisc() {
        
      }

    }])

}());
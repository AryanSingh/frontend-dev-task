(function(){
  'use strict';
  angular.
    module('devApp')
    .factory('messageApi',['$http','$q',messageApi]);



    function messageApi($http,$q){

      function getMessages(){
        var deferred = $q.defer();

        $http.get("/api/message/")
          .success(function(data){
            deferred.resolve(data);
          })
          .error(function(){
            deferred.reject();
          })
        return deferred.promise;
      }
    
      function getMessageData(id){
        var deferred = $q.defer();
        $http.get("api/message/" + id)
          .success(function(data){
            deferred.resolve(data);
          })
          .error(function(){
            deferred.reject();
          });
        return deferred.promise;
      }

      function deleteMessage(id){
        var deferred = $q.defer();
        $http.delete("api/message/" + id)
          .success(function(data){
            deferred.resolve(data);
          })
          .error(function(){
            deferred.reject();
          });
        return deferred.promise;
      }
      return{
        getMessages: getMessages,
        getMessageData: getMessageData,
        deleteMessage: deleteMessage 
      };
    };
})();
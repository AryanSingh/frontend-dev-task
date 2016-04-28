(function(){
  'use strict';
  angular.module('devApp').controller('MessageDetailCtrl', ['$routeParams','messageApi','flash','Flash','$location',MessageDetailCtrl]);

  function MessageDetailCtrl($routeParams,messageApi,flash,Flash,$location){
    var vm = this;
    var messageId = Number($routeParams.id);
    messageApi.getMessageData(messageId).then(function(data){
      vm.message = data;
    })

    vm.MessageDelete =function(id){
      messageApi.deleteMessage(id);
      $location.path("/messages");
      var message = 'You successfully deleted the message.';
      var id = Flash.create('success', message, 2000, {class: 'custom-class', id: 'custom-id'}, true);
    }
  };
})();
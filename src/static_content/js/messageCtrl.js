(function(){
  'use strict';
  angular.module('devApp').controller('MessageCtrl', ['messageApi','Flash','$location',MessageCtrl]);

  function MessageCtrl(messageApi,Flash,$location){
    var vm = this;
    messageApi.getMessages().then(function(data){
      vm.messages = data;
    })
    vm.messageDelete =function(id){
      messageApi.deleteMessage(id);
      $location.path("/messages");
      var message = 'You successfully deleted the message.';
      var id = Flash.create('success', message, 2000, {class: 'custom-class', id: 'custom-id'}, true);
      messageApi.getMessages().then(function(data){
        vm.messages = data;
      })
    }
    vm.toggleStar = function(id){
      messageApi.getMessageData(id).then(function(data){
        data.isStarred = !data.isStarred;
        // console.log('star toggled');
        // console.log(data.isStarred);
        // messageApi.getMessages().then(function(data){
        //   vm.messages = data;
        // })
      })
    }

    vm.toggleRead =function(id){
      messageApi.getMessageData(id).then(function(data){
        data.isRead = !data.isRead;
        // console.log('Read toggled');
        // messageApi.getMessages().then(function(data){
        //   vm.messages = data;
        // })
      })
    }
  };
})();
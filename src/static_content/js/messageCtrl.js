(function(){
  'use strict';
  angular.module('devApp').controller('MessageCtrl', ['messageApi',MessageCtrl]);

  function MessageCtrl(messageApi){
    var vm = this;
    messageApi.getMessages().then(function(data){
      vm.messages = data;
      
    })
  };
})();
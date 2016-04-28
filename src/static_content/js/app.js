angular.module("devApp",['ngRoute','ngMdIcons','flash','ngFlash','ngAnimate'])
.config(function($routeProvider){

  $routeProvider
    

    .when('/messages',{
      
      templateUrl: "/static/views/messages.html",
      controller: "MessageCtrl"
    })

    .when('/messages/:id',{
      templateUrl: "static/views/message-detail.html",
      controller:"MessageDetailCtrl"
    })
    .otherwise({ redirectTo: '/messages' });

  
})

.config(['$httpProvider', function ($httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';
    $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
    $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
    $httpProvider.defaults.useXDomain = true;
}]);
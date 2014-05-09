'use strict';

var app = angular.module('joahg', [
    'ngRoute',
    'yaru22.md'
  ]);

app.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/posts/:post', {
      templateUrl: 'views/post.html',
      controller: 'PostCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  var $http, interceptor = function ($q, $injector) {
    function success(response) { return response; }
      function error(response) {
        if (response.status === 404 && response.config.url.indexOf(".md")) {
          $http = $http || $injector.get('$http');
          var defer = $q.defer();
          $http.get('404.md')
            .then(function (result) {
              response.status = 200;
              response.data = result.data;
              defer.resolve(response);
            }, function () {
              defer.reject(response);
            });
            return defer.promise;// response;
          } else {
            return $q.reject(response);
          }
        }
        return function (promise) { return promise.then(success, error); }
      };
  $httpProvider.responseInterceptors.push(interceptor);
});
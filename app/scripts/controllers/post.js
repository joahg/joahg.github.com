'use strict';

angular.module('joahg').controller('PostCtrl', function ($scope, $routeParams) {
  $scope.post = $routeParams.post;
});

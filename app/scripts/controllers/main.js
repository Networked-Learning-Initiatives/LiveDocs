'use strict';

/**
 * @ngdoc function
 * @name liveDocsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the liveDocsApp
 */
angular.module('liveDocsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

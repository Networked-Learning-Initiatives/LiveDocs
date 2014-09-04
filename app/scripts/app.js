'use strict';

/**
 * @ngdoc overview
 * @name liveDocsApp
 * @description
 * # liveDocsApp
 *
 * Main module of the application.
 */
angular
  .module('liveDocsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc function
 * @name edApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the edApp
 */
angular.module('edApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

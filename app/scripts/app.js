'use strict';

/**
 * @ngdoc overview
 * @name edApp
 * @description
 * # edApp
 *
 * Main module of the application.
 */

angular
        .module('edApp', [
            'ngAnimate',
            'ngRoute',
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
        }).run(function ($rootScope) {
    // After changing route
    $rootScope.$on('$routeChangeSuccess', function () {
        // Initialize Foundation
        $(document).foundation();
    });
});
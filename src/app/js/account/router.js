/**
 * Created by RobertSabiryanov on 13.07.15.
 */
angular.module('account').config(['$stateProvider', function ($stateProvider, $templateCache) {
    // For any unmatched url, redirect to /state1
    $stateProvider.state('access', {
        abstract: true,
        url: '/access',
        template: '<div ui-view></div>'
    }).state('access.signin', {
        url: '/signin',
        template: $templateCache.get('js/account/controllers/signin/signIn.html'),
        controller: 'SigninController'
    }).state('access.signup', {
        url: '/signup',
        template: $templateCache.get('js/account/controllers/signup/signup.html'),
        controller: 'SignupController'
    });
}]);

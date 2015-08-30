/**
 * Created by RobertSabiryanov on 13.07.15.
 */
angular.module('account').run(['stateAdapter','$templateCache', function (stateAdapter, $templateCache) {
    stateAdapter.state('access', {
        abstract: true,
        url: '/access',
        template: '<div ui-view></div>'
    }).state('access.signin', {
        url: '/signin',
        template: $templateCache.get('account/controllers/signin/signin.controller.html'),
        controller: 'SigninController as signin'
    }).state('access.signup', {
        url: '/signup',
        template: $templateCache.get('account/controllers/signup/signup.controller.html'),
        controller: 'SignupController'
    });
}]);

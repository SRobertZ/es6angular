/**
 * Created by RobertSabiryanov on 19.07.15.
 */
angular.module('main').run(['stateAdapter','$templateCache', function (stateAdapter,$templateCache) {
    stateAdapter.state('main', {
        abstract: true,
        url: '/main',
        template: '<div ui-view></div>'
    }).state('main.list', {
        url: '/list',
        template: $templateCache.get('main/controllers/main.controller.html'),
        controller: 'MainController'
    });
}]);
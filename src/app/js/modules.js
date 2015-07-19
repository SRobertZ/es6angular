/**
 * Created by RobertSabiryanov on 13.07.15.
 */

angular.module('main.templates',[]);
angular.module('core',['ngRoute', 'ui.router']);
angular.module('core').provider('stateAdapter',['$stateProvider', function($stateProvider){
    this.$get=function(){
        return {
            state: function(name,options){
                return $stateProvider.state(name, options);
            }
        }
    }
}]);

angular.module('main', ['core', 'main.templates']);
//angular.module('account', ['main','shared','main.templates']);
angular.module('account', ['core', 'main', 'main.templates']);
angular.module('app', ['core', 'account']);

angular.module('app').config(['$urlRouterProvider',function($urlRouterProvider){
    $urlRouterProvider.otherwise('access/signin');
    $urlRouterProvider.when('', 'access/signin');
}]);


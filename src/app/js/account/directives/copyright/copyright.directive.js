/**
 * Created by RobertSabiryanov on 13.07.15.
 */

var _accountService = new WeakMap();

class Copyright {
    constructor($templateCache, accountService) {
        _accountService.set(this, accountService);
        this.restrict = 'E';
        this.template = $templateCache.get('account/directives/copyright/copyright.directive.html');
        this.scope = {};
        this.controller = ['$scope', function ($scope) {
            $scope.copyright = function () {
                return 'Page © - 2015';
            };
        }];
    }

    link(scope) {
        scope.doSomething = function () {
            //какой-нибудь код
            var accountService= _accountService.get(Copyright.instance);
            //какой-нибудь код
        }
    }

    static createInstance($templateCache, accountService) {
        Copyright.instance = new Copyright($templateCache, accountService);
        return Copyright.instance;
    }
}
Copyright.createInstance.$inject = ['$templateCache', 'accountService'];

export {Copyright}


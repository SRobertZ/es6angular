/**
 * Created by RobertSabiryanov on 13.07.15.
 */

class Copyright {
    constructor($templateCache) {
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

    }

    static createInstance($templateCache) {
        return new Copyright($templateCache);
    }
}
Copyright.$inject=['$templateCache'];

export {Copyright}


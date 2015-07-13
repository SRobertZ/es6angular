/**
 * Created by RobertSabiryanov on 13.07.15.
 */

class Copyright {
    constructor() {
        this.restrict = 'E';
        this.templateUrl = 'js/modules/account/directives/copyright.html';
        this.scope = {};
        this.controller = ['$scope', function ($scope) {
            $scope.copyright = function () {
                return 'Page © - 2015';
            };
        }];
    }

    link(scope) {

    }

    static createInstance(/*$templateCache*/) {
        return new Copyright();
    }
}

export {Copyright}


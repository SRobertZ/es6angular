/**
 * Created by RobertSabiryanov on 13.07.15.
 */

class SignupController {
    constructor($scope, $state, accountService) {
        this.init($scope, $state, accountService);
    }

    init($scope, $state, accountService) {

        $scope.signup = function () {
            accountService.signup().then(()=> {
                $state.go('main.list');
            });
        };

    }
}

SignupController.$inject = ['$scope', '$state', 'accountService'];

export {SignupController}


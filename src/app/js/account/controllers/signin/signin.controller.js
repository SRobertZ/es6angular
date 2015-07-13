
class SigninController{
constructor($scope, accountService, $state){
    this.$state= $state;
    this.scope=$scope;
    this.init();
}
    init(){
        this.scope.showPassword = function () {
            var key_attr = $('#key').attr('type');
            if (key_attr != 'text') {
                $('.checkbox').addClass('show');
                $('#key').attr('type', 'text');
            } else {
                $('.checkbox').removeClass('show');
                $('#key').attr('type', 'password');
            }
        };

        this.scope.login = function () {
            accountService.login().then(function () {
                $state.go('main.list');
            });
        };
    }
}

SigninController.$inject=['$scope', 'accountService', '$state'];

angular.module('account').controller('SigninController', ['$scope', 'accountService', '$state', function () {

}]);
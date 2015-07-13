/**
 * Created by RobertSabiryanov on 13.07.15.
 */

class SignupController{
    constructor($scope){
        this.$scope=$scope;
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
        this.scope.signup = function () {

        };
    }
}

SignupController.$inject=['$scope'];

export {SignupController}


import accountService from '../../services/accountService.factory.js';

var _state = new WeakMap();

class SigninController {
    constructor($state) {
        _state.set(this, $state);
    }

    showPassword() {
        var key_attr = $('#key').attr('type');
        if (key_attr != 'text') {
            $('.checkbox').addClass('show');
            $('#key').attr('type', 'text');
        } else {
            $('.checkbox').removeClass('show');
            $('#key').attr('type', 'password');
        }
    };

    login(){
        var that=this;
        accountService.login().then(()=> {
            _state.get(that).go('main.list');
        });
    };
}

SigninController.$inject = ['$state'];

export {SigninController}
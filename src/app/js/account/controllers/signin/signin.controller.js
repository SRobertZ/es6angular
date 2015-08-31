var _state = new WeakMap();
var _accountService = new WeakMap();

class SigninController {
    constructor($state, accountService) {
        _state.set(this, $state);
        _accountService.set(this, accountService);
    }

    login() {
        _accountService.get(this).login().then(()=> {
            _state.get(this).go('main.list');
        });
    };
}

SigninController.$inject = ['$state', 'accountService'];
export {SigninController}
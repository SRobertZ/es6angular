/**
 * Created by RobertSabiryanov on 13.07.15.
 */
import router from './router.js';
import {SigninController} from './controllers/signin/signin.controller.js';
import {SignupController} from './controllers/signup/signup.controller.js';
import {Copyright} from './directives/copyright/copyright.directive.js';
import {AccountService} from './services/accountService.factory.js';

angular.module('account').controller('SigninController', SigninController);
angular.module('account').controller('SignupController', SignupController);
angular.module('account').directive('copyright', Copyright.createInstance);
angular.module('account').service('accountService',  AccountService);
//angular.module('account').factory('accountService',  function(){return new AccountService()});
//angular.module('account').provider('accountService',  providerBuilder(AccountService));


//function providerBuilder(obj) {
//    return function () {
//        this.$get = [function () {
//            return new obj();
//        }];
//    }
//}
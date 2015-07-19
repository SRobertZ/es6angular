/**
 * Created by RobertSabiryanov on 13.07.15.
 */
import router from './router.js';
import {SigninController} from './controllers/signin/signin.controller.js';
import {SignupController} from './controllers/signup/signup.controller.js';
import {Copyright} from './directives/copyright/copyright.directive.js';

angular.module('account').controller('SigninController', SigninController);
angular.module('account').controller('SignupController', SignupController);
angular.module('account').directive('copyright', Copyright.createInstance);


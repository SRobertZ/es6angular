/**
 * Created by RobertSabiryanov on 13.07.15.
 */

angular.module('main.templates',[]);
angular.module('account', ['main','shared','main.templates']);
angular.module('app', ['ngRoute', 'ui.router', 'account']);


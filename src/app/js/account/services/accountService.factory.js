/**
 * Created by RobertSabiryanov on 13.07.15.
 */
import api from './accountApi.factory.js';

class AccountService {
    login(){
        return api.login();
    }
    signup(){
        return api.signup();
    }
}

export {AccountService}
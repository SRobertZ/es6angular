/**
 * Created by RobertSabiryanov on 13.07.15.
 */
import api from './accountApi.factory.js';

export default {
  login(){
      return api.login();
  }
}
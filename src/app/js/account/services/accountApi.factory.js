/**
 * Created by RobertSabiryanov on 13.07.15.
 */
import q from 'promise';
export default {
    login(){
        var deferred = q.defer();
        deferred.resolve(true);
        return deferred.promise;
    },
    signup(){
        var deferred = q.defer();
        deferred.resolve(true);
        return deferred.promise;
    }
}
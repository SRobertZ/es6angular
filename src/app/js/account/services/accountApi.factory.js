/**
 * Created by RobertSabiryanov on 13.07.15.
 */
import q from {Q}
export default {
    login(){
        var deferred = q.defer();
        deferred.resolve(true);
        return deferred.promise;
    }
}
import {FBLoginManager} from 'react-native-facebook-login';

const Facebook = {
    login: (permissions) => {
        return new Promise((resolve, reject) => {
            FBLoginManager.loginWithPermissions(permissions || ['email'], (error, data) => {
                if (!error) {
                    resolve(data.credentials.token);
                } else {
                    reject(error);
                }
            });
        });
    },
    logout: () => {
        return new Promise((resolve, reject) => {
            FBLoginManager.logout((error, data) => {
                if (!error) {
                    resolve(true);
                } else {
                    reject(error);
                }
            });
        });
    }
}
const Auth = {Facebook};
export default Auth;
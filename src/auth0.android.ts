import { Application } from '@nativescript/core';
import {
    Auth0Common,
    ResponseType,
    WebAuthException,
    WebAuthOptions
} from './auth0-common';
// import { AuthenticationAPIClient } from './android/authentication/authenticationAPIClient';
// import { WebAuthProvider } from './android/provider/webAuthProvider';
import { AuthenticationException } from './android/authentication/authenticationException';
// import { Auth0 as Auth0Android } from './android/auth0';
import { Credentials } from './common/credentials';
import { UserInfo } from './common/userInfo';

// @ts-ignore
const WebAuthProvider = com.auth0.android.provider.WebAuthProvider;
// @ts-ignore
const AuthCallback = com.auth0.android.provider.AuthCallback;
// @ts-ignore
const Auth0Android = com.auth0.android.Auth0;
// @ts-ignore
const AuthenticationAPIClient = com.auth0.android.authentication.AuthenticationAPIClient;
// @ts-ignore
// const Credentials = com.auth0.android.result.Credentials;

export {
    Credentials,
    UserInfo,
    ResponseType,
    WebAuthException,
    WebAuthOptions
};

export class Auth0 extends Auth0Common {

    private account: typeof Auth0Android;
    private authenticationApi: typeof AuthenticationAPIClient;

    constructor(clientId: string, domain: string) {
        super(clientId, domain);

        this.account = new Auth0Android(clientId, domain);

        // this.authenticationApi = new AuthenticationAPIClient(this.account);
    }

    public webAuthentication(options: WebAuthOptions): Promise<Credentials> {
        // @ts-ignore
        const webAuth = WebAuthProvider.login(this.account);

        if (options.audience != null) {
            webAuth.withAudience(options.audience);
        }
        if (options.connection != null) {
            webAuth.withConnection(options.connection);
        }
        if (options.nonce != null) {
            webAuth.withNonce(options.nonce);
        }
        if (options.responseType != null) {
            webAuth.withResponseType(options.responseType as number);
        }
        if (options.scheme != null) {
            webAuth.withScheme(options.scheme);
        }
        if (options.scope != null) {
            webAuth.withScope(options.scope);
        }
        if (options.state != null) {
            webAuth.withState(options.state);
        }
        if (options.parameters != null) {
            webAuth.withParameters(options.parameters);
        }

        return new Promise((resolve, reject) => {
            try {
                const activity = Application.android.foregroundActivity == null ? Application.android.startActivity : Application.android.foregroundActivity;
                webAuth.start(activity, new AuthCallback({
                    onFailure: (dialogOrException: android.app.Dialog | AuthenticationException) => {
                        if (dialogOrException instanceof android.app.Dialog) {
                            reject(new WebAuthException(dialogOrException.toString()));
                        } else {
                            reject(new WebAuthException(dialogOrException.getDescription()));
                        }
                    },
                    onSuccess: (credentials: Credentials) => {
                        resolve(credentials);
                    }
                }));
            } catch (e) {
                reject(e);
            }
        });
    }

    public renewCredentials(refreshToken: string): Promise<Credentials> {
        return new Promise((resolve, reject) => {
            try {
                this.authenticationApi
                    .renewAuth(refreshToken)
                    .start({
                        onFailure: (error: AuthenticationException) => {
                            reject(error);
                        },
                        onSuccess: (credentials: Credentials) => {
                            resolve(credentials);
                        }
                    });
            } catch (e) {
                reject(e);
            }
        });
    }

    public revokeRefreshToken(refreshToken: string): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                this.authenticationApi
                    .revokeToken(refreshToken)
                    .start({
                        onFailure: (error: AuthenticationException) => {
                            reject(error);
                        },
                        onSuccess: () => {
                            resolve();
                        }
                    });
            } catch (e) {
                reject(e);
            }
        });
    }

    public getUserInfo(accessToken: string): Promise<UserInfo> {
        return new Promise((resolve, reject) => {
            try {
                this.authenticationApi
                    .userInfo(accessToken)
                    .start({
                        onFailure: (error: AuthenticationException) => {
                            reject(error);
                        },
                        onSuccess: (userInfo: UserInfo) => {
                            resolve(userInfo);
                        }
                    });
            } catch (e) {
                reject(e);
            }
        });
    }

    // public logout(): Promise<any> {
    //     const webAuth = new WebAuthProvider(this.account);

    //     return new Promise((resolve, reject) => {
    //         try {
    //             const activity = Application.android.foregroundActivity == null ? Application.android.startActivity : Application.android.foregroundActivity;
    //             webAuth.logout(activity, {
    //                 onFailure: (err: AuthenticationException) => {
    //                     reject(err);
    //                 },
    //                 onSuccess: () => {
    //                     resolve(true);
    //                 }
    //             });
    //         } catch (e) {
    //             reject(e);
    //         }
    //     });
    // }
}

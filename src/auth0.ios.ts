import {
    Auth0Common,
    ResponseType,
    // WebAuthException,
    WebAuthOptions
} from './auth0-common';
// import { Auth0Authentication } from './ios/auth0Authentication';
// import { SafariWebAuth } from './ios/safariWebAuth';
// import { ResponseType as iOSResponseType } from './ios/responseType';
// import { a0_url } from './ios/utils';
// import { Credentials } from './common/credentials';
// import { UserInfo } from './common/userInfo';

export {
    // Credentials,
    // UserInfo,
    ResponseType,
    // WebAuthException,
    WebAuthOptions
};

// export { resumeAuth } from './ios/webAuth';

export class Auth0 extends Auth0Common {
    public clientId: string;
    public domain: string;

    // private authenticationApi: Auth0Authentication;

    constructor(clientId: string, domain: string) {
        super(clientId, domain);

        this.clientId = clientId;
        this.domain = domain;

        // this.authenticationApi = new A0AuthenticationAPI.initWithClientIdUrl(this.clientId, this.domain);
    }

    public login(options: WebAuthOptions): Promise<any> {
        // @ts-ignore
        const auth = new A0WebAuth(this.clientId, NSURL.URLWithString(`https://${this.domain}/`));

        /*
        if (options.audience != null) {
            // @ts-ignore
            auth.addParameters(NSDictionary.dictionaryWithDictionary({ 'audience': options.audience }));
        }
        */

       // @ts-ignore
    //    auth.addParameters(NSDictionary.dictionaryWithDictionary({ 'audience': `https://${this.domain}/userinfo` }));

        if (options.issuer != null) {
            // @ts-ignore
            // auth.scope = options.scope;
            auth.addParameters(NSDictionary.dictionaryWithDictionary({ 'issuer': options.issuer }));
        }

        if (options.scope != null) {
            // @ts-ignore
            // auth.scope = options.scope;
            auth.addParameters(NSDictionary.dictionaryWithDictionary({ 'scope': options.scope }));
        }
        // @ts-ignore
        // auth.addParameters(NSDictionary.dictionaryWithDictionary({ 'logging': true }));

        return new Promise((resolve, reject) => {
            try {
                auth.start((p1: NSError, p2: A0Credentials) => {
                    debugger;
                    if (p1) {
                        console.log('error');
                        console.log(p1);
                        console.log(p1.description);
                    }

                    console.log('------------------');

                    if (p2) {
                        console.log('success');
                    }

                    resolve(true);

                    /*
                    // @ts-ignore
                    if (result.failure != null) {
                        // @ts-ignore
                        console.log(result.failure.message);
                        // reject(new WebAuthException(result.failure.message));
                    } else {
                        // @ts-ignore
                        const credentials = result.success;
                        resolve(credentials);
                    }
                    */
                });
            } catch (e) {
                reject(e);
            }
        });
    }

    public logout(): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                resolve(true);
                /*
                this.authenticationApi
                    .logout((result) => {
                        if (result.failure != null) {
                            reject(result.failure);
                        } else {
                            resolve(result.success);
                        }
                    });
                */
            } catch (e) {
                reject(e);
            }
        });
    }

    // public renewCredentials(refreshToken: string): Promise<Credentials> {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             this.authenticationApi
    //                 .renew(refreshToken)
    //                 .start((result) => {
    //                     if (result.failure != null) {
    //                         reject(result.failure);
    //                     } else {
    //                         resolve(result.success);
    //                     }
    //                 });
    //         } catch (e) {
    //             reject(e);
    //         }
    //     });
    // }

    // public revokeRefreshToken(refreshToken: string): Promise<void> {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             this.authenticationApi
    //                 .revoke(refreshToken)
    //                 .start((result) => {
    //                     if (result.failure != null) {
    //                         reject(result.failure);
    //                     } else {
    //                         resolve();
    //                     }
    //                 });
    //         } catch (e) {
    //             reject(e);
    //         }
    //     });
    // }

    // public getUserInfo(accessToken: string): Promise<UserInfo> {
    //     return new Promise((resolve, reject) => {
    //         try {
    //             this.authenticationApi
    //                 .userInfo(accessToken)
    //                 .start((result) => {
    //                     if (result.failure != null) {
    //                         reject(result.failure);
    //                     } else {
    //                         resolve(result.success);
    //                     }
    //                 });
    //         } catch (e) {
    //             reject(e);
    //         }
    //     });
    // }
}

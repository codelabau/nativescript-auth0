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

function a0_url(domain: string): NSURL {
    let urlString: string;
    if (!domain.startsWith('https')) {
        urlString = `https://${domain}`;
    } else {
        urlString = domain;
    }
    return new NSURL({ string: urlString });
}

// export { resumeAuth } from './ios/webAuth';

declare const NSDictionary: any;

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
        const auth = new A0WebAuth({
            clientId: this.clientId,
            url: a0_url(this.domain),
        });

        if (options.audience != null) {
            auth.addParameters(NSDictionary.dictionaryWithDictionary({ 'audience': options.audience }));
        }

        if (options.issuer != null) {
            auth.addParameters(NSDictionary.dictionaryWithDictionary({ 'issuer': options.issuer }));
        }

        if (options.scope != null) {
            auth.addParameters(NSDictionary.dictionaryWithDictionary({ 'scope': options.scope }));
        }

        auth.addParameters(NSDictionary.dictionaryWithDictionary({ 'issuer': 'https://wejugo-dev.au.auth0.com//' }));

        // crashes when touching A0Credentials
        console.log('A0Credentials');
        console.log(A0Credentials);

        return new Promise((resolve, reject) => {
            try {
                auth.start((p1: NSError, p2: A0Credentials) => {
                    // crash occurs here on successful auth
                    // if we don't console log above
                    if (p1) {
                        reject(p1);
                    } else if (p2) {
                        resolve(p2);
                    }

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

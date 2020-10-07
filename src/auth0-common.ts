// import { Credentials } from './common/credentials';
// import { UserInfo } from './common/userInfo';

export enum ResponseType {
    CODE = 1,
    TOKEN = 2,
    ID_TOKEN = 4
}

interface WebAuthOptions {
    audience?: string;
    connection?: string;
    nonce?: string;
    responseType?: ResponseType;
    scheme?: string;
    scope?: string;
    state?: string;
    parameters?: { [param: string]: string; };
    customTabsOptions?: CustomTabsOptions;
}

interface CustomTabsOptions {
    showTitle?: boolean;
    toolbarColor?: string;
}

@NativeClass()
class WebAuthException extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
export {
    WebAuthException,
    WebAuthOptions,
    CustomTabsOptions
};

export abstract class Auth0Common {
    constructor(
        protected clientId: string,
        protected domain: string
    ) {}

    public abstract login(options: WebAuthOptions): Promise<any>;
    public abstract logout(options: WebAuthOptions): Promise<any>;
    // public abstract renewCredentials(refreshToken: string): Promise<com.auth0.android.result.Credentials>;
    // public abstract revokeRefreshToken(refreshToken: string): Promise<void>;
    // public abstract getUserInfo(accessToken: string): Promise<UserInfo>;
}

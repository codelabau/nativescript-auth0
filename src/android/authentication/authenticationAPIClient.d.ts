import { AuthenticationException } from './authenticationException';
import { Auth0 } from '../auth0';
import { UserInfo } from '../../common/userInfo';
import { DatabaseUser } from '../../common/databaseUser';
import { Request } from '../request/request';
import { ParameterizableRequest } from '../request/parameterizableRequest';
import { Credentials } from '../../common/credentials';
import { AuthenticationRequest } from '../request/authenticationRequest';
import { RequestFactory } from '../request/internal/requestFactory';
import { DatabaseConnectionRequest } from './request/databaseConnectionRequest';
import { ProfileRequest } from './request/profileRequest';
import { SignUpRequest } from './request/signUpRequest';
import { TokenRequest } from './request/tokenRequest';
export declare class AuthenticationAPIClient {
    private static readonly USERNAME_KEY;
    private static readonly PASSWORD_KEY;
    private static readonly EMAIL_KEY;
    private static readonly OAUTH_CODE_KEY;
    private static readonly REDIRECT_URI_KEY;
    private static readonly TOKEN_KEY;
    private static readonly MFA_TOKEN_KEY;
    private static readonly ONE_TIME_PASSWORD_KEY;
    private static readonly SIGN_UP_PATH;
    private static readonly DB_CONNECTIONS_PATH;
    private static readonly CHANGE_PASSWORD_PATH;
    private static readonly OAUTH_PATH;
    private static readonly TOKEN_PATH;
    private static readonly USER_INFO_PATH;
    private static readonly REVOKE_PATH;
    private static readonly HEADER_AUTHORIZATION;
    private readonly auth0;
    private readonly factory;
    private readonly authErrorBuilder;
    constructor(auth0: Auth0, factory?: RequestFactory);
    getClientId(): string;
    getBaseURL(): string;
    setUserAgent(userAgent: string): void;
    login(usernameOrEmail: string, password: string, realmOrConnection?: string): AuthenticationRequest;
    loginWithOTP(mfaToken: string, otp: string): AuthenticationRequest;
    userInfo(accessToken: string): Request<UserInfo, AuthenticationException>;
    createUser(email: string, password: string, username: string | undefined, connection: string): DatabaseConnectionRequest<DatabaseUser, AuthenticationException>;
    signUp(email: string, password: string, username: string | undefined, connection: string): SignUpRequest;
    resetPassword(email: string, connection: string): DatabaseConnectionRequest<void, AuthenticationException>;
    revokeToken(refreshToken: string): Request<void, AuthenticationException>;
    renewAuth(refreshToken: string): ParameterizableRequest<Credentials, AuthenticationException>;
    getProfileAfter(authenticationRequest: AuthenticationRequest): ProfileRequest;
    token(authorizationCode: string, redirectUri: string): TokenRequest;
    private loginWithToken(parameters);
    private profileRequest();
}

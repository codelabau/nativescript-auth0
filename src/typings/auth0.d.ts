declare module com {
	export module auth0 {
		export module android {
			export class Auth0 {
				public static class: java.lang.Class<com.auth0.android.Auth0>;
				public setOIDCConformant(param0: boolean): void;
				public getAuthorizeUrl(): string;
				public constructor(param0: string, param1: string, param2: string);
				public getClientId(): string;
				public setConnectTimeoutInSeconds(param0: number): void;
				public setReadTimeoutInSeconds(param0: number): void;
				public isLoggingEnabled(): boolean;
				public isTLS12Enforced(): boolean;
				public getReadTimeoutInSeconds(): number;
				public setLoggingEnabled(param0: boolean): void;
				public setWriteTimeoutInSeconds(param0: number): void;
				public setTelemetry(param0: com.auth0.android.util.Telemetry): void;
				public getDomainUrl(): string;
				public constructor(param0: globalAndroid.content.Context);
				public getConfigurationUrl(): string;
				public getLogoutUrl(): string;
				public getConnectTimeoutInSeconds(): number;
				public isOIDCConformant(): boolean;
				public setTLS12Enforced(param0: boolean): void;
				public getTelemetry(): com.auth0.android.util.Telemetry;
				public getWriteTimeoutInSeconds(): number;
				public doNotSendTelemetry(): void;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export class Auth0Exception {
				public static class: java.lang.Class<com.auth0.android.Auth0Exception>;
				public static UNKNOWN_ERROR: string;
				public static NON_JSON_ERROR: string;
				public static EMPTY_BODY_ERROR: string;
				public static EMPTY_RESPONSE_BODY_DESCRIPTION: string;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export class NetworkErrorException extends com.auth0.android.Auth0Exception {
				public static class: java.lang.Class<com.auth0.android.NetworkErrorException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export class RequestBodyBuildException extends com.auth0.android.Auth0Exception {
				public static class: java.lang.Class<com.auth0.android.RequestBodyBuildException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module auth0 {
				export class BuildConfig {
					public static class: java.lang.Class<com.auth0.android.auth0.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public static LIBRARY_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export class AuthenticationAPIClient {
					public static class: java.lang.Class<com.auth0.android.authentication.AuthenticationAPIClient>;
					public loginWithNativeSocialToken(param0: string, param1: string): com.auth0.android.request.AuthRequest;
					public signUp(param0: string, param1: string, param2: string, param3: string): com.auth0.android.authentication.request.SignUpRequest;
					public setUserAgent(param0: string): void;
					public delegation(): com.auth0.android.request.ParameterizableRequest<java.util.Map<string,any>,com.auth0.android.authentication.AuthenticationException>;
					public loginWithPhoneNumber(param0: string, param1: string, param2: string): com.auth0.android.request.AuthRequest;
					public delegationWithRefreshToken(param0: string): com.auth0.android.authentication.request.DelegationRequest<com.auth0.android.result.Delegation>;
					public resetPassword(param0: string, param1: string): com.auth0.android.authentication.request.DatabaseConnectionRequest<java.lang.Void,com.auth0.android.authentication.AuthenticationException>;
					public createUser(param0: string, param1: string, param2: string, param3: string): com.auth0.android.authentication.request.DatabaseConnectionRequest<com.auth0.android.result.DatabaseUser,com.auth0.android.authentication.AuthenticationException>;
					public loginWithEmail(param0: string, param1: string, param2: string): com.auth0.android.request.AuthRequest;
					public signUp(param0: string, param1: string, param2: string): com.auth0.android.authentication.request.SignUpRequest;
					public login(param0: string, param1: string): com.auth0.android.request.AuthRequest;
					public revokeToken(param0: string): com.auth0.android.request.ParameterizableRequest<java.lang.Void,com.auth0.android.authentication.AuthenticationException>;
					public getProfileAfter(param0: com.auth0.android.request.AuthenticationRequest): com.auth0.android.authentication.request.ProfileRequest;
					public token(param0: string, param1: string): com.auth0.android.authentication.request.TokenRequest;
					public getBaseURL(): string;
					public passwordlessWithEmail(param0: string, param1: com.auth0.android.authentication.PasswordlessType, param2: string): com.auth0.android.request.ParameterizableRequest<java.lang.Void,com.auth0.android.authentication.AuthenticationException>;
					public passwordlessWithSMS(param0: string, param1: com.auth0.android.authentication.PasswordlessType): com.auth0.android.request.ParameterizableRequest<java.lang.Void,com.auth0.android.authentication.AuthenticationException>;
					public getClientId(): string;
					public renewAuth(param0: string): com.auth0.android.request.ParameterizableRequest<com.auth0.android.result.Credentials,com.auth0.android.authentication.AuthenticationException>;
					public delegationWithIdToken(param0: string): com.auth0.android.authentication.request.DelegationRequest<com.auth0.android.result.Delegation>;
					public login(param0: string, param1: string, param2: string): com.auth0.android.request.AuthRequest;
					public passwordlessWithSMS(param0: string, param1: com.auth0.android.authentication.PasswordlessType, param2: string): com.auth0.android.request.ParameterizableRequest<java.lang.Void,com.auth0.android.authentication.AuthenticationException>;
					public loginWithPhoneNumber(param0: string, param1: string): com.auth0.android.request.AuthRequest;
					public passwordlessWithEmail(param0: string, param1: com.auth0.android.authentication.PasswordlessType): com.auth0.android.request.ParameterizableRequest<java.lang.Void,com.auth0.android.authentication.AuthenticationException>;
					/** @deprecated */
					public tokenInfo(param0: string): com.auth0.android.request.ParameterizableRequest<com.auth0.android.result.UserProfile,com.auth0.android.authentication.AuthenticationException>;
					public createUser(param0: string, param1: string, param2: string): com.auth0.android.authentication.request.DatabaseConnectionRequest<com.auth0.android.result.DatabaseUser,com.auth0.android.authentication.AuthenticationException>;
					public constructor(param0: globalAndroid.content.Context);
					public fetchJsonWebKeys(): com.auth0.android.request.ParameterizableRequest<java.util.Map<string,java.security.PublicKey>,com.auth0.android.authentication.AuthenticationException>;
					public constructor(param0: com.auth0.android.Auth0);
					public loginWithOTP(param0: string, param1: string): com.auth0.android.request.AuthRequest;
					public userInfo(param0: string): com.auth0.android.request.ParameterizableRequest<com.auth0.android.result.UserProfile,com.auth0.android.authentication.AuthenticationException>;
					public loginWithEmail(param0: string, param1: string): com.auth0.android.request.AuthRequest;
					public delegationWithIdToken(param0: string, param1: string): com.auth0.android.authentication.request.DelegationRequest<java.util.Map<string,any>>;
					public loginWithOAuthAccessToken(param0: string, param1: string): com.auth0.android.request.AuthRequest;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export class AuthenticationException extends com.auth0.android.Auth0Exception {
					public static class: java.lang.Class<com.auth0.android.authentication.AuthenticationException>;
					public isAuthenticationCanceled(): boolean;
					public getStatusCode(): number;
					public isMultifactorTokenInvalid(): boolean;
					public isInvalidCredentials(): boolean;
					public constructor(param0: string);
					public isInvalidConfiguration(): boolean;
					public isRuleError(): boolean;
					public isMultifactorCodeInvalid(): boolean;
					public constructor(param0: string, param1: string);
					public getCode(): string;
					public isPasswordLeaked(): boolean;
					public constructor(param0: string, param1: number);
					public isPasswordNotStrongEnough(): boolean;
					public constructor(param0: java.util.Map<string,any>);
					public isMultifactorRequired(): boolean;
					public isInvalidAuthorizeURL(): boolean;
					public constructor(param0: string, param1: com.auth0.android.Auth0Exception);
					public isVerificationRequired(): boolean;
					public isPasswordAlreadyUsed(): boolean;
					public isAccessDenied(): boolean;
					public constructor(param0: string, param1: java.lang.Throwable);
					public getValue(param0: string): any;
					public isNetworkError(): boolean;
					public isLoginRequired(): boolean;
					public isMultifactorEnrollRequired(): boolean;
					public getDescription(): string;
					public isBrowserAppNotAvailable(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export class ParameterBuilder {
					public static class: java.lang.Class<com.auth0.android.authentication.ParameterBuilder>;
					public static GRANT_TYPE_REFRESH_TOKEN: string;
					public static GRANT_TYPE_PASSWORD: string;
					public static GRANT_TYPE_PASSWORD_REALM: string;
					public static GRANT_TYPE_JWT: string;
					public static GRANT_TYPE_AUTHORIZATION_CODE: string;
					public static GRANT_TYPE_MFA_OTP: string;
					public static GRANT_TYPE_PASSWORDLESS_OTP: string;
					public static GRANT_TYPE_TOKEN_EXCHANGE: string;
					public static SCOPE_OPENID: string;
					public static SCOPE_OFFLINE_ACCESS: string;
					public static ID_TOKEN_KEY: string;
					public static SCOPE_KEY: string;
					public static REFRESH_TOKEN_KEY: string;
					public static CONNECTION_KEY: string;
					public static REALM_KEY: string;
					public static ACCESS_TOKEN_KEY: string;
					public static SEND_KEY: string;
					public static CLIENT_ID_KEY: string;
					public static GRANT_TYPE_KEY: string;
					public static DEVICE_KEY: string;
					public static AUDIENCE_KEY: string;
					public setRefreshToken(param0: string): com.auth0.android.authentication.ParameterBuilder;
					public asDictionary(): java.util.Map<string,any>;
					public setSend(param0: com.auth0.android.authentication.PasswordlessType): com.auth0.android.authentication.ParameterBuilder;
					public static newAuthenticationBuilder(): com.auth0.android.authentication.ParameterBuilder;
					public setDevice(param0: string): com.auth0.android.authentication.ParameterBuilder;
					public setConnection(param0: string): com.auth0.android.authentication.ParameterBuilder;
					public setAccessToken(param0: string): com.auth0.android.authentication.ParameterBuilder;
					public setRealm(param0: string): com.auth0.android.authentication.ParameterBuilder;
					public setAudience(param0: string): com.auth0.android.authentication.ParameterBuilder;
					public clearAll(): com.auth0.android.authentication.ParameterBuilder;
					public addAll(param0: java.util.Map<string,any>): com.auth0.android.authentication.ParameterBuilder;
					public setClientId(param0: string): com.auth0.android.authentication.ParameterBuilder;
					public static newBuilder(): com.auth0.android.authentication.ParameterBuilder;
					public set(param0: string, param1: any): com.auth0.android.authentication.ParameterBuilder;
					public static newBuilder(param0: java.util.Map<string,any>): com.auth0.android.authentication.ParameterBuilder;
					public setGrantType(param0: string): com.auth0.android.authentication.ParameterBuilder;
					public setScope(param0: string): com.auth0.android.authentication.ParameterBuilder;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export class PasswordStrengthErrorParser {
					public static class: java.lang.Class<com.auth0.android.authentication.PasswordStrengthErrorParser>;
					public getDescription(): string;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export class PasswordlessType {
					public static class: java.lang.Class<com.auth0.android.authentication.PasswordlessType>;
					public static WEB_LINK: com.auth0.android.authentication.PasswordlessType;
					public static ANDROID_LINK: com.auth0.android.authentication.PasswordlessType;
					public static CODE: com.auth0.android.authentication.PasswordlessType;
					public static valueOf(param0: string): com.auth0.android.authentication.PasswordlessType;
					public getValue(): string;
					public static values(): native.Array<com.auth0.android.authentication.PasswordlessType>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module request {
					export class DatabaseConnectionRequest<T, U>  extends java.lang.Object {
						public static class: java.lang.Class<com.auth0.android.authentication.request.DatabaseConnectionRequest<any,any>>;
						public addParameters(param0: java.util.Map<string,any>): com.auth0.android.authentication.request.DatabaseConnectionRequest<T,U>;
						public setConnection(param0: string): com.auth0.android.authentication.request.DatabaseConnectionRequest<T,U>;
						public execute(): T;
						public addHeader(param0: string, param1: string): com.auth0.android.authentication.request.DatabaseConnectionRequest<T,U>;
						public start(param0: com.auth0.android.callback.BaseCallback<T,U>): void;
						public addParameter(param0: string, param1: any): com.auth0.android.authentication.request.DatabaseConnectionRequest<T,U>;
						public constructor(param0: com.auth0.android.request.ParameterizableRequest<T,U>);
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module request {
					export class DelegationRequest<T>  extends com.auth0.android.request.Request<any,com.auth0.android.authentication.AuthenticationException> {
						public static class: java.lang.Class<com.auth0.android.authentication.request.DelegationRequest<any>>;
						public static DEFAULT_API_TYPE: string;
						public addHeader(param0: string, param1: string): com.auth0.android.authentication.request.DelegationRequest<any>;
						public start(param0: com.auth0.android.callback.BaseCallback<any,com.auth0.android.authentication.AuthenticationException>): void;
						public start(param0: com.auth0.android.callback.BaseCallback<any,any>): void;
						public constructor(param0: com.auth0.android.request.ParameterizableRequest<any,com.auth0.android.authentication.AuthenticationException>);
						public setApiType(param0: string): com.auth0.android.authentication.request.DelegationRequest<any>;
						public setScope(param0: string): com.auth0.android.authentication.request.DelegationRequest<any>;
						public addParameters(param0: java.util.Map<string,any>): com.auth0.android.authentication.request.DelegationRequest<any>;
						public execute(): any;
						public setTarget(param0: string): com.auth0.android.authentication.request.DelegationRequest<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module request {
					export class ProfileRequest extends com.auth0.android.request.Request<com.auth0.android.result.Authentication,com.auth0.android.authentication.AuthenticationException> {
						public static class: java.lang.Class<com.auth0.android.authentication.request.ProfileRequest>;
						public addParameters(param0: java.util.Map<string,any>): com.auth0.android.authentication.request.ProfileRequest;
						public setScope(param0: string): com.auth0.android.authentication.request.ProfileRequest;
						public start(param0: com.auth0.android.callback.BaseCallback<com.auth0.android.result.Authentication,com.auth0.android.authentication.AuthenticationException>): void;
						public start(param0: com.auth0.android.callback.BaseCallback<any,any>): void;
						public constructor(param0: com.auth0.android.request.AuthRequest, param1: com.auth0.android.request.ParameterizableRequest<com.auth0.android.result.UserProfile,com.auth0.android.authentication.AuthenticationException>);
						public setConnection(param0: string): com.auth0.android.authentication.request.ProfileRequest;
						public execute(): any;
						/** @deprecated */
						public constructor(param0: com.auth0.android.request.AuthenticationRequest, param1: com.auth0.android.request.ParameterizableRequest<com.auth0.android.result.UserProfile,com.auth0.android.authentication.AuthenticationException>);
						public execute(): com.auth0.android.result.Authentication;
						public addHeader(param0: string, param1: string): com.auth0.android.authentication.request.ProfileRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module request {
					export class SignUpRequest extends java.lang.Object {
						public static class: java.lang.Class<com.auth0.android.authentication.request.SignUpRequest>;
						/** @deprecated */
						public constructor(param0: com.auth0.android.authentication.request.DatabaseConnectionRequest<com.auth0.android.result.DatabaseUser,com.auth0.android.authentication.AuthenticationException>, param1: com.auth0.android.request.AuthenticationRequest);
						public setAccessToken(param0: string): com.auth0.android.authentication.request.SignUpRequest;
						public setAccessToken(param0: string): com.auth0.android.request.AuthenticationRequest;
						public start(param0: com.auth0.android.callback.BaseCallback<any,any>): void;
						public setRealm(param0: string): com.auth0.android.authentication.request.SignUpRequest;
						public setConnection(param0: string): com.auth0.android.request.AuthenticationRequest;
						public setScope(param0: string): com.auth0.android.request.AuthenticationRequest;
						public setDevice(param0: string): com.auth0.android.request.AuthenticationRequest;
						public constructor(param0: com.auth0.android.authentication.request.DatabaseConnectionRequest<com.auth0.android.result.DatabaseUser,com.auth0.android.authentication.AuthenticationException>, param1: com.auth0.android.request.AuthRequest);
						public addHeader(param0: string, param1: string): com.auth0.android.authentication.request.SignUpRequest;
						public setScope(param0: string): com.auth0.android.authentication.request.SignUpRequest;
						public addAuthenticationParameters(param0: java.util.Map<string,any>): com.auth0.android.request.AuthenticationRequest;
						public execute(): any;
						public setGrantType(param0: string): com.auth0.android.request.AuthenticationRequest;
						public setDevice(param0: string): com.auth0.android.authentication.request.SignUpRequest;
						public addSignUpParameters(param0: java.util.Map<string,any>): com.auth0.android.authentication.request.SignUpRequest;
						public start(param0: com.auth0.android.callback.BaseCallback<com.auth0.android.result.Credentials,com.auth0.android.authentication.AuthenticationException>): void;
						public setGrantType(param0: string): com.auth0.android.authentication.request.SignUpRequest;
						public addAuthenticationParameters(param0: java.util.Map<string,any>): com.auth0.android.authentication.request.SignUpRequest;
						public setAudience(param0: string): com.auth0.android.authentication.request.SignUpRequest;
						public setAudience(param0: string): com.auth0.android.request.AuthenticationRequest;
						public addHeader(param0: string, param1: string): com.auth0.android.request.AuthRequest;
						public setConnection(param0: string): com.auth0.android.authentication.request.SignUpRequest;
						public execute(): com.auth0.android.result.Credentials;
						public setRealm(param0: string): com.auth0.android.request.AuthenticationRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module request {
					export class TokenRequest extends com.auth0.android.request.Request<com.auth0.android.result.Credentials,com.auth0.android.authentication.AuthenticationException> {
						public static class: java.lang.Class<com.auth0.android.authentication.request.TokenRequest>;
						public addHeader(param0: string, param1: string): com.auth0.android.authentication.request.TokenRequest;
						public start(param0: com.auth0.android.callback.BaseCallback<any,any>): void;
						public addParameters(param0: java.util.Map<string,any>): com.auth0.android.authentication.request.TokenRequest;
						public start(param0: com.auth0.android.callback.BaseCallback<com.auth0.android.result.Credentials,com.auth0.android.authentication.AuthenticationException>): void;
						public constructor(param0: com.auth0.android.request.ParameterizableRequest<com.auth0.android.result.Credentials,com.auth0.android.authentication.AuthenticationException>);
						public execute(): any;
						public setCodeVerifier(param0: string): com.auth0.android.authentication.request.TokenRequest;
						public execute(): com.auth0.android.result.Credentials;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class CredentialsManager {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.CredentialsManager>;
						public hasValidCredentials(): boolean;
						public getCredentials(param0: com.auth0.android.callback.BaseCallback<com.auth0.android.result.Credentials,com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public saveCredentials(param0: com.auth0.android.result.Credentials): void;
						public clearCredentials(): void;
						public constructor(param0: com.auth0.android.authentication.AuthenticationAPIClient, param1: com.auth0.android.authentication.storage.Storage);
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class CredentialsManagerException extends com.auth0.android.Auth0Exception {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.CredentialsManagerException>;
						public isDeviceIncompatible(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class CryptoException {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.CryptoException>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class CryptoUtil {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.CryptoUtil>;
						public decrypt(param0: native.Array<number>): native.Array<number>;
						public encrypt(param0: native.Array<number>): native.Array<number>;
						public constructor(param0: globalAndroid.content.Context, param1: com.auth0.android.authentication.storage.Storage, param2: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class IncompatibleDeviceException extends com.auth0.android.authentication.storage.CryptoException {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.IncompatibleDeviceException>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class JWTDecoder {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.JWTDecoder>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class SecureCredentialsManager {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.SecureCredentialsManager>;
						public checkAuthenticationResult(param0: number, param1: number): boolean;
						public hasValidCredentials(): boolean;
						public getCredentials(param0: com.auth0.android.callback.BaseCallback<com.auth0.android.result.Credentials,com.auth0.android.authentication.storage.CredentialsManagerException>): void;
						public requireAuthentication(param0: globalAndroid.app.Activity, param1: number, param2: string, param3: string): boolean;
						public saveCredentials(param0: com.auth0.android.result.Credentials): void;
						public clearCredentials(): void;
						public constructor(param0: globalAndroid.content.Context, param1: com.auth0.android.authentication.AuthenticationAPIClient, param2: com.auth0.android.authentication.storage.Storage);
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class SharedPreferencesStorage extends com.auth0.android.authentication.storage.Storage {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.SharedPreferencesStorage>;
						public constructor(param0: globalAndroid.content.Context);
						public store(param0: string, param1: string): void;
						public store(param0: string, param1: java.lang.Long): void;
						public retrieveInteger(param0: string): java.lang.Integer;
						public remove(param0: string): void;
						public store(param0: string, param1: java.lang.Boolean): void;
						public retrieveLong(param0: string): java.lang.Long;
						public constructor(param0: globalAndroid.content.Context, param1: string);
						public retrieveString(param0: string): string;
						public retrieveBoolean(param0: string): java.lang.Boolean;
						public store(param0: string, param1: java.lang.Integer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module authentication {
				export module storage {
					export class Storage {
						public static class: java.lang.Class<com.auth0.android.authentication.storage.Storage>;
						/**
						 * Constructs a new instance of the com.auth0.android.authentication.storage.Storage interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							store(param0: string, param1: java.lang.Long): void;
							store(param0: string, param1: java.lang.Integer): void;
							store(param0: string, param1: string): void;
							store(param0: string, param1: java.lang.Boolean): void;
							retrieveLong(param0: string): java.lang.Long;
							retrieveString(param0: string): string;
							retrieveInteger(param0: string): java.lang.Integer;
							retrieveBoolean(param0: string): java.lang.Boolean;
							remove(param0: string): void;
						});
						public constructor();
						public store(param0: string, param1: string): void;
						public store(param0: string, param1: java.lang.Long): void;
						public retrieveInteger(param0: string): java.lang.Integer;
						public remove(param0: string): void;
						public store(param0: string, param1: java.lang.Boolean): void;
						public retrieveLong(param0: string): java.lang.Long;
						public retrieveString(param0: string): string;
						public retrieveBoolean(param0: string): java.lang.Boolean;
						public store(param0: string, param1: java.lang.Integer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module callback {
				export class AuthenticationCallback<T>  extends com.auth0.android.callback.BaseCallback<any,com.auth0.android.authentication.AuthenticationException> {
					public static class: java.lang.Class<com.auth0.android.callback.AuthenticationCallback<any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.callback.AuthenticationCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: any): void;
						onFailure(param0: any): void;
					});
					public constructor();
					public onFailure(param0: any): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module callback {
				export class BaseCallback<T, U>  extends com.auth0.android.callback.Callback<any> {
					public static class: java.lang.Class<com.auth0.android.callback.BaseCallback<any,any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.callback.BaseCallback<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: any): void;
						onFailure(param0: any): void;
					});
					public constructor();
					public onFailure(param0: any): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module callback {
				export class Callback<U>  extends java.lang.Object {
					public static class: java.lang.Class<com.auth0.android.callback.Callback<any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.callback.Callback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFailure(param0: U): void;
					});
					public constructor();
					public onFailure(param0: U): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module callback {
				export class ManagementCallback<T>  extends com.auth0.android.callback.BaseCallback<any,com.auth0.android.management.ManagementException> {
					public static class: java.lang.Class<com.auth0.android.callback.ManagementCallback<any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.callback.ManagementCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: any): void;
						onFailure(param0: any): void;
					});
					public constructor();
					public onFailure(param0: any): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module management {
				export class ManagementException extends com.auth0.android.Auth0Exception {
					public static class: java.lang.Class<com.auth0.android.management.ManagementException>;
					public getStatusCode(): number;
					public constructor(param0: string, param1: java.lang.Throwable);
					public getCode(): string;
					public constructor(param0: string);
					public getValue(param0: string): any;
					public isNetworkError(): boolean;
					public constructor(param0: string, param1: number);
					public constructor(param0: string, param1: com.auth0.android.Auth0Exception);
					public getDescription(): string;
					public constructor(param0: java.util.Map<string,any>);
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module management {
				export class UsersAPIClient {
					public static class: java.lang.Class<com.auth0.android.management.UsersAPIClient>;
					public getClientId(): string;
					public link(param0: string, param1: string): com.auth0.android.request.ParameterizableRequest<java.util.List<com.auth0.android.result.UserIdentity>,com.auth0.android.management.ManagementException>;
					public updateMetadata(param0: string, param1: java.util.Map<string,any>): com.auth0.android.request.ParameterizableRequest<com.auth0.android.result.UserProfile,com.auth0.android.management.ManagementException>;
					public getProfile(param0: string): com.auth0.android.request.ParameterizableRequest<com.auth0.android.result.UserProfile,com.auth0.android.management.ManagementException>;
					public setUserAgent(param0: string): void;
					public unlink(param0: string, param1: string, param2: string): com.auth0.android.request.ParameterizableRequest<java.util.List<com.auth0.android.result.UserIdentity>,com.auth0.android.management.ManagementException>;
					public constructor(param0: com.auth0.android.Auth0, param1: string);
					public constructor(param0: globalAndroid.content.Context, param1: string);
					public getBaseURL(): string;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AlgorithmHelper {
					public static class: java.lang.Class<com.auth0.android.provider.AlgorithmHelper>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AlgorithmNameVerifier extends com.auth0.android.provider.SignatureVerifier {
					public static class: java.lang.Class<com.auth0.android.provider.AlgorithmNameVerifier>;
					public checkSignature(param0: native.Array<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AsymmetricSignatureVerifier extends com.auth0.android.provider.SignatureVerifier {
					public static class: java.lang.Class<com.auth0.android.provider.AsymmetricSignatureVerifier>;
					public checkSignature(param0: native.Array<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AuthCallback {
					public static class: java.lang.Class<com.auth0.android.provider.AuthCallback>;
					/**
					 * Constructs a new instance of the com.auth0.android.provider.AuthCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFailure(param0: globalAndroid.app.Dialog): void;
						onFailure(param0: com.auth0.android.authentication.AuthenticationException): void;
						onSuccess(param0: com.auth0.android.result.Credentials): void;
					});
					public constructor();
					public onSuccess(param0: com.auth0.android.result.Credentials): void;
					public onFailure(param0: com.auth0.android.authentication.AuthenticationException): void;
					public onFailure(param0: globalAndroid.app.Dialog): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AuthHandler {
					public static class: java.lang.Class<com.auth0.android.provider.AuthHandler>;
					/**
					 * Constructs a new instance of the com.auth0.android.provider.AuthHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						providerFor(param0: string, param1: string): com.auth0.android.provider.AuthProvider;
					});
					public constructor();
					public providerFor(param0: string, param1: string): com.auth0.android.provider.AuthProvider;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export abstract class AuthProvider {
					public static class: java.lang.Class<com.auth0.android.provider.AuthProvider>;
					public getRequiredAndroidPermissions(): native.Array<string>;
					public start(param0: globalAndroid.app.Activity, param1: com.auth0.android.provider.AuthCallback, param2: number, param3: number): void;
					public getParameters(): java.util.Map<string,any>;
					public authorize(param0: globalAndroid.content.Intent): boolean;
					public constructor();
					public clearSession(): void;
					public setParameters(param0: java.util.Map<string,any>): void;
					public authorize(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
					public requestAuth(param0: globalAndroid.app.Activity, param1: number): void;
					public getCallback(): com.auth0.android.provider.AuthCallback;
					public stop(): void;
					public onRequestPermissionsResult(param0: globalAndroid.app.Activity, param1: number, param2: native.Array<string>, param3: native.Array<number>): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AuthenticationActivity {
					public static class: java.lang.Class<com.auth0.android.provider.AuthenticationActivity>;
					public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
					public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					public onNewIntent(param0: globalAndroid.content.Intent): void;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onDestroy(): void;
					public onResume(): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class AuthorizeResult {
					public static class: java.lang.Class<com.auth0.android.provider.AuthorizeResult>;
					public constructor(param0: number, param1: number, param2: globalAndroid.content.Intent);
					public getIntentData(): globalAndroid.net.Uri;
					public constructor(param0: globalAndroid.content.Intent);
					public isValid(param0: number): boolean;
					public isCanceled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class BrowserPicker {
					public static class: java.lang.Class<com.auth0.android.provider.BrowserPicker>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.auth0.android.provider.BrowserPicker>;
					public static newBuilder(): com.auth0.android.provider.BrowserPicker.Builder;
					public constructor(param0: globalAndroid.os.Parcel);
					public describeContents(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module BrowserPicker {
					export class Builder {
						public static class: java.lang.Class<com.auth0.android.provider.BrowserPicker.Builder>;
						public withAllowedPackages(param0: java.util.List<string>): com.auth0.android.provider.BrowserPicker.Builder;
						public build(): com.auth0.android.provider.BrowserPicker;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export abstract class CallbackHelper {
					public static class: java.lang.Class<com.auth0.android.provider.CallbackHelper>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class CustomTabsController {
					public static class: java.lang.Class<com.auth0.android.provider.CustomTabsController>;
					public onCustomTabsServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.support.customtabs.CustomTabsClient): void;
					public bindService(): void;
					public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
					public unbindService(): void;
					public launchUri(param0: globalAndroid.net.Uri): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class CustomTabsOptions {
					public static class: java.lang.Class<com.auth0.android.provider.CustomTabsOptions>;
					public static CREATOR: globalAndroid.os.Parcelable.Creator<com.auth0.android.provider.CustomTabsOptions>;
					public constructor(param0: globalAndroid.os.Parcel);
					public describeContents(): number;
					public static newBuilder(): com.auth0.android.provider.CustomTabsOptions.Builder;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				}
				export module CustomTabsOptions {
					export class Builder {
						public static class: java.lang.Class<com.auth0.android.provider.CustomTabsOptions.Builder>;
						public withToolbarColor(param0: number): com.auth0.android.provider.CustomTabsOptions.Builder;
						public build(): com.auth0.android.provider.CustomTabsOptions;
						public withBrowserPicker(param0: com.auth0.android.provider.BrowserPicker): com.auth0.android.provider.CustomTabsOptions.Builder;
						public showTitle(param0: boolean): com.auth0.android.provider.CustomTabsOptions.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class FlagChecker {
					public static class: java.lang.Class<com.auth0.android.provider.FlagChecker>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class IdTokenVerificationOptions {
					public static class: java.lang.Class<com.auth0.android.provider.IdTokenVerificationOptions>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class IdTokenVerifier {
					public static class: java.lang.Class<com.auth0.android.provider.IdTokenVerifier>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class LogoutManager extends com.auth0.android.provider.ResumableManager {
					public static class: java.lang.Class<com.auth0.android.provider.LogoutManager>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class OAuthManager extends com.auth0.android.provider.ResumableManager {
					public static class: java.lang.Class<com.auth0.android.provider.OAuthManager>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class PKCE {
					public static class: java.lang.Class<com.auth0.android.provider.PKCE>;
					public getCodeChallenge(): string;
					public constructor(param0: com.auth0.android.authentication.AuthenticationAPIClient, param1: string);
					public getToken(param0: string, param1: com.auth0.android.provider.AuthCallback): void;
					public static isAvailable(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class PermissionHandler {
					public static class: java.lang.Class<com.auth0.android.provider.PermissionHandler>;
					public requestPermissions(param0: globalAndroid.app.Activity, param1: native.Array<string>, param2: number): java.util.List<string>;
					public constructor();
					public parseRequestResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): java.util.List<string>;
					public areAllPermissionsGranted(param0: globalAndroid.app.Activity, param1: native.Array<string>): boolean;
					public isPermissionGranted(param0: globalAndroid.app.Activity, param1: string): boolean;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class RedirectActivity {
					public static class: java.lang.Class<com.auth0.android.provider.RedirectActivity>;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class ResponseType {
					public static class: java.lang.Class<com.auth0.android.provider.ResponseType>;
					/**
					 * Constructs a new instance of the com.auth0.android.provider.ResponseType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
					public static ID_TOKEN: number;
					public static TOKEN: number;
					public static CODE: number;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export abstract class ResumableManager {
					public static class: java.lang.Class<com.auth0.android.provider.ResumableManager>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export abstract class SignatureVerifier {
					public static class: java.lang.Class<com.auth0.android.provider.SignatureVerifier>;
					public checkSignature(param0: native.Array<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export abstract class SimpleAuthCallback extends com.auth0.android.provider.AuthCallback {
					public static class: java.lang.Class<com.auth0.android.provider.SimpleAuthCallback>;
					public onSuccess(param0: com.auth0.android.result.Credentials): void;
					public constructor(param0: com.auth0.android.provider.AuthCallback);
					public onFailure(param0: com.auth0.android.authentication.AuthenticationException): void;
					public onFailure(param0: globalAndroid.app.Dialog): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class TokenValidationException extends com.auth0.android.Auth0Exception {
					public static class: java.lang.Class<com.auth0.android.provider.TokenValidationException>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class VoidCallback extends com.auth0.android.callback.BaseCallback<java.lang.Void,com.auth0.android.Auth0Exception> {
					public static class: java.lang.Class<com.auth0.android.provider.VoidCallback>;
					/**
					 * Constructs a new instance of the com.auth0.android.provider.VoidCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSuccess(param0: any): void;
						onFailure(param0: any): void;
					});
					public constructor();
					public onFailure(param0: any): void;
					public onSuccess(param0: any): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class WebAuthActivity {
					public static class: java.lang.Class<com.auth0.android.provider.WebAuthActivity>;
					public static CONNECTION_NAME_EXTRA: string;
					public static FULLSCREEN_EXTRA: string;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public constructor();
					public onWindowFocusChanged(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module provider {
				export class WebAuthProvider {
					public static class: java.lang.Class<com.auth0.android.provider.WebAuthProvider>;
					public static logout(param0: com.auth0.android.Auth0): com.auth0.android.provider.WebAuthProvider.LogoutBuilder;
					public static login(param0: com.auth0.android.Auth0): com.auth0.android.provider.WebAuthProvider.Builder;
					public constructor();
					public static resume(param0: globalAndroid.content.Intent): boolean;
					/** @deprecated */
					public static resume(param0: number, param1: number, param2: globalAndroid.content.Intent): boolean;
					/** @deprecated */
					public static init(param0: globalAndroid.content.Context): com.auth0.android.provider.WebAuthProvider.Builder;
					/** @deprecated */
					public static init(param0: com.auth0.android.Auth0): com.auth0.android.provider.WebAuthProvider.Builder;
				}
				export module WebAuthProvider {
					export class Builder {
						public static class: java.lang.Class<com.auth0.android.provider.WebAuthProvider.Builder>;
						public withScheme(param0: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public start(param0: globalAndroid.app.Activity, param1: com.auth0.android.provider.AuthCallback): void;
						public withAudience(param0: string): com.auth0.android.provider.WebAuthProvider.Builder;
						/** @deprecated */
						public useBrowser(param0: boolean): com.auth0.android.provider.WebAuthProvider.Builder;
						public withScope(param0: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public withCustomTabsOptions(param0: com.auth0.android.provider.CustomTabsOptions): com.auth0.android.provider.WebAuthProvider.Builder;
						public withNonce(param0: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public withConnectionScope(param0: native.Array<string>): com.auth0.android.provider.WebAuthProvider.Builder;
						public withRedirectUri(param0: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public withMaxAge(param0: java.lang.Integer): com.auth0.android.provider.WebAuthProvider.Builder;
						public withResponseType(param0: number): com.auth0.android.provider.WebAuthProvider.Builder;
						/** @deprecated */
						public useFullscreen(param0: boolean): com.auth0.android.provider.WebAuthProvider.Builder;
						public withIdTokenVerificationLeeway(param0: java.lang.Integer): com.auth0.android.provider.WebAuthProvider.Builder;
						/** @deprecated */
						public useCodeGrant(param0: boolean): com.auth0.android.provider.WebAuthProvider.Builder;
						/** @deprecated */
						public start(param0: globalAndroid.app.Activity, param1: com.auth0.android.provider.AuthCallback, param2: number): void;
						public withState(param0: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public withIdTokenVerificationIssuer(param0: string): com.auth0.android.provider.WebAuthProvider.Builder;
						public withParameters(param0: java.util.Map<string,any>): com.auth0.android.provider.WebAuthProvider.Builder;
						public withConnection(param0: string): com.auth0.android.provider.WebAuthProvider.Builder;
					}
					export class LogoutBuilder {
						public static class: java.lang.Class<com.auth0.android.provider.WebAuthProvider.LogoutBuilder>;
						public withReturnToUrl(param0: string): com.auth0.android.provider.WebAuthProvider.LogoutBuilder;
						public withCustomTabsOptions(param0: com.auth0.android.provider.CustomTabsOptions): com.auth0.android.provider.WebAuthProvider.LogoutBuilder;
						public withScheme(param0: string): com.auth0.android.provider.WebAuthProvider.LogoutBuilder;
						public start(param0: globalAndroid.content.Context, param1: com.auth0.android.provider.VoidCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class AuthRequest extends com.auth0.android.request.AuthenticationRequest {
					public static class: java.lang.Class<com.auth0.android.request.AuthRequest>;
					/**
					 * Constructs a new instance of the com.auth0.android.request.AuthRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addHeader(param0: string, param1: string): com.auth0.android.request.AuthRequest;
						setGrantType(param0: string): com.auth0.android.request.AuthenticationRequest;
						setConnection(param0: string): com.auth0.android.request.AuthenticationRequest;
						setRealm(param0: string): com.auth0.android.request.AuthenticationRequest;
						setScope(param0: string): com.auth0.android.request.AuthenticationRequest;
						setDevice(param0: string): com.auth0.android.request.AuthenticationRequest;
						setAudience(param0: string): com.auth0.android.request.AuthenticationRequest;
						setAccessToken(param0: string): com.auth0.android.request.AuthenticationRequest;
						addAuthenticationParameters(param0: java.util.Map<string,any>): com.auth0.android.request.AuthenticationRequest;
						start(param0: com.auth0.android.callback.BaseCallback<any,any>): void;
						execute(): any;
					});
					public constructor();
					public addHeader(param0: string, param1: string): com.auth0.android.request.AuthRequest;
					public setConnection(param0: string): com.auth0.android.request.AuthenticationRequest;
					public execute(): any;
					public setScope(param0: string): com.auth0.android.request.AuthenticationRequest;
					public setDevice(param0: string): com.auth0.android.request.AuthenticationRequest;
					public setAccessToken(param0: string): com.auth0.android.request.AuthenticationRequest;
					public setGrantType(param0: string): com.auth0.android.request.AuthenticationRequest;
					public setRealm(param0: string): com.auth0.android.request.AuthenticationRequest;
					public start(param0: com.auth0.android.callback.BaseCallback<any,any>): void;
					public setAudience(param0: string): com.auth0.android.request.AuthenticationRequest;
					public addAuthenticationParameters(param0: java.util.Map<string,any>): com.auth0.android.request.AuthenticationRequest;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class AuthenticationRequest extends com.auth0.android.request.Request<com.auth0.android.result.Credentials,com.auth0.android.authentication.AuthenticationException> {
					public static class: java.lang.Class<com.auth0.android.request.AuthenticationRequest>;
					/**
					 * Constructs a new instance of the com.auth0.android.request.AuthenticationRequest interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setGrantType(param0: string): com.auth0.android.request.AuthenticationRequest;
						setConnection(param0: string): com.auth0.android.request.AuthenticationRequest;
						setRealm(param0: string): com.auth0.android.request.AuthenticationRequest;
						setScope(param0: string): com.auth0.android.request.AuthenticationRequest;
						setDevice(param0: string): com.auth0.android.request.AuthenticationRequest;
						setAudience(param0: string): com.auth0.android.request.AuthenticationRequest;
						setAccessToken(param0: string): com.auth0.android.request.AuthenticationRequest;
						addAuthenticationParameters(param0: java.util.Map<string,any>): com.auth0.android.request.AuthenticationRequest;
						start(param0: com.auth0.android.callback.BaseCallback<any,any>): void;
						execute(): any;
					});
					public constructor();
					public setConnection(param0: string): com.auth0.android.request.AuthenticationRequest;
					public execute(): any;
					public setScope(param0: string): com.auth0.android.request.AuthenticationRequest;
					public setDevice(param0: string): com.auth0.android.request.AuthenticationRequest;
					public setAccessToken(param0: string): com.auth0.android.request.AuthenticationRequest;
					public setGrantType(param0: string): com.auth0.android.request.AuthenticationRequest;
					public setRealm(param0: string): com.auth0.android.request.AuthenticationRequest;
					public start(param0: com.auth0.android.callback.BaseCallback<any,any>): void;
					public setAudience(param0: string): com.auth0.android.request.AuthenticationRequest;
					public addAuthenticationParameters(param0: java.util.Map<string,any>): com.auth0.android.request.AuthenticationRequest;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class AuthorizableRequest<T, U>  extends com.auth0.android.request.ParameterizableRequest<any,any> {
					public static class: java.lang.Class<com.auth0.android.request.AuthorizableRequest<any,any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.request.AuthorizableRequest<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setBearer(param0: string): com.auth0.android.request.AuthorizableRequest<any,any>;
						addParameters(param0: java.util.Map<string,any>): com.auth0.android.request.ParameterizableRequest<any,any>;
						addParameter(param0: string, param1: any): com.auth0.android.request.ParameterizableRequest<any,any>;
						addHeader(param0: string, param1: string): com.auth0.android.request.ParameterizableRequest<any,any>;
						start(param0: com.auth0.android.callback.BaseCallback<any,any>): void;
						execute(): any;
					});
					public constructor();
					public execute(): any;
					public addHeader(param0: string, param1: string): com.auth0.android.request.ParameterizableRequest<any,any>;
					public setBearer(param0: string): com.auth0.android.request.AuthorizableRequest<any,any>;
					public addParameter(param0: string, param1: any): com.auth0.android.request.ParameterizableRequest<any,any>;
					public start(param0: com.auth0.android.callback.BaseCallback<any,any>): void;
					public addParameters(param0: java.util.Map<string,any>): com.auth0.android.request.ParameterizableRequest<any,any>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class ErrorBuilder<U>  extends java.lang.Object {
					public static class: java.lang.Class<com.auth0.android.request.ErrorBuilder<any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.request.ErrorBuilder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						from(param0: string): U;
						from(param0: string, param1: com.auth0.android.Auth0Exception): U;
						from(param0: java.util.Map<string,any>): U;
						from(param0: string, param1: number): U;
					});
					public constructor();
					public from(param0: string): U;
					public from(param0: string, param1: com.auth0.android.Auth0Exception): U;
					public from(param0: java.util.Map<string,any>): U;
					public from(param0: string, param1: number): U;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class ParameterizableRequest<T, U>  extends com.auth0.android.request.Request<any,any> {
					public static class: java.lang.Class<com.auth0.android.request.ParameterizableRequest<any,any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.request.ParameterizableRequest<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addParameters(param0: java.util.Map<string,any>): com.auth0.android.request.ParameterizableRequest<any,any>;
						addParameter(param0: string, param1: any): com.auth0.android.request.ParameterizableRequest<any,any>;
						addHeader(param0: string, param1: string): com.auth0.android.request.ParameterizableRequest<any,any>;
						start(param0: com.auth0.android.callback.BaseCallback<any,any>): void;
						execute(): any;
					});
					public constructor();
					public execute(): any;
					public addHeader(param0: string, param1: string): com.auth0.android.request.ParameterizableRequest<any,any>;
					public addParameter(param0: string, param1: any): com.auth0.android.request.ParameterizableRequest<any,any>;
					public start(param0: com.auth0.android.callback.BaseCallback<any,any>): void;
					public addParameters(param0: java.util.Map<string,any>): com.auth0.android.request.ParameterizableRequest<any,any>;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export class Request<T, U>  extends java.lang.Object {
					public static class: java.lang.Class<com.auth0.android.request.Request<any,any>>;
					/**
					 * Constructs a new instance of the com.auth0.android.request.Request<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						start(param0: com.auth0.android.callback.BaseCallback<T,U>): void;
						execute(): T;
					});
					public constructor();
					public execute(): T;
					public start(param0: com.auth0.android.callback.BaseCallback<T,U>): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class AuthenticationErrorBuilder extends com.auth0.android.request.ErrorBuilder<com.auth0.android.authentication.AuthenticationException> {
						public static class: java.lang.Class<com.auth0.android.request.internal.AuthenticationErrorBuilder>;
						public constructor();
						public from(param0: string, param1: com.auth0.android.Auth0Exception): com.auth0.android.authentication.AuthenticationException;
						public from(param0: java.util.Map<string,any>): any;
						public from(param0: string, param1: number): any;
						public from(param0: string): com.auth0.android.authentication.AuthenticationException;
						public from(param0: java.util.Map<string,any>): com.auth0.android.authentication.AuthenticationException;
						public from(param0: string, param1: number): com.auth0.android.authentication.AuthenticationException;
						public from(param0: string, param1: com.auth0.android.Auth0Exception): any;
						public from(param0: string): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class BaseAuthenticationRequest extends com.auth0.android.request.internal.SimpleRequest<com.auth0.android.result.Credentials,com.auth0.android.authentication.AuthenticationException> implements com.auth0.android.request.AuthRequest  {
						public static class: java.lang.Class<com.auth0.android.request.internal.BaseAuthenticationRequest>;
						public setAccessToken(param0: string): com.auth0.android.request.AuthenticationRequest;
						public setAudience(param0: string): com.auth0.android.request.AuthRequest;
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: string, param4: com.google.gson.reflect.TypeToken<any>, param5: com.auth0.android.request.ErrorBuilder<any>);
						public start(param0: com.auth0.android.callback.BaseCallback<any,any>): void;
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: string, param4: java.lang.Class<any>, param5: com.auth0.android.request.ErrorBuilder<any>);
						public setConnection(param0: string): com.auth0.android.request.AuthenticationRequest;
						public setRealm(param0: string): com.auth0.android.request.AuthRequest;
						public setScope(param0: string): com.auth0.android.request.AuthenticationRequest;
						public setDevice(param0: string): com.auth0.android.request.AuthenticationRequest;
						public setBearer(param0: string): com.auth0.android.request.AuthorizableRequest<any,any>;
						public setDevice(param0: string): com.auth0.android.request.AuthRequest;
						public addHeader(param0: string, param1: string): com.auth0.android.request.internal.BaseAuthenticationRequest;
						public setConnection(param0: string): com.auth0.android.request.AuthRequest;
						public setScope(param0: string): com.auth0.android.request.AuthRequest;
						public addHeader(param0: string, param1: string): com.auth0.android.request.ParameterizableRequest<any,any>;
						public setGrantType(param0: string): com.auth0.android.request.AuthRequest;
						public addAuthenticationParameters(param0: java.util.Map<string,any>): com.auth0.android.request.AuthenticationRequest;
						public setGrantType(param0: string): com.auth0.android.request.AuthenticationRequest;
						public execute(): any;
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: string);
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: string, param4: com.auth0.android.request.ErrorBuilder<any>);
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: com.google.gson.TypeAdapter<any>, param4: com.auth0.android.request.ErrorBuilder<any>, param5: com.auth0.android.callback.BaseCallback<any,any>);
						public setAudience(param0: string): com.auth0.android.request.AuthenticationRequest;
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: com.google.gson.TypeAdapter<any>, param4: com.auth0.android.request.ErrorBuilder<any>);
						public addHeader(param0: string, param1: string): com.auth0.android.request.AuthRequest;
						public addParameters(param0: java.util.Map<string,any>): com.auth0.android.request.ParameterizableRequest<any,any>;
						public addAuthenticationParameters(param0: java.util.Map<string,any>): com.auth0.android.request.AuthRequest;
						public addParameter(param0: string, param1: any): com.auth0.android.request.ParameterizableRequest<any,any>;
						public setAccessToken(param0: string): com.auth0.android.request.AuthRequest;
						public setRealm(param0: string): com.auth0.android.request.AuthenticationRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export abstract class BaseRequest<T, U>  extends java.lang.Object {
						public static class: java.lang.Class<com.auth0.android.request.internal.BaseRequest<any,any>>;
						public url: com.squareup.okhttp.HttpUrl;
						public client: com.squareup.okhttp.OkHttpClient;
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: com.google.gson.TypeAdapter<T>, param4: com.auth0.android.request.ErrorBuilder<U>);
						public parseUnsuccessfulResponse(param0: com.squareup.okhttp.Response): U;
						public execute(): T;
						public newBuilder(): com.squareup.okhttp.Request.Builder;
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: com.google.gson.TypeAdapter<T>, param4: com.auth0.android.request.ErrorBuilder<U>, param5: com.auth0.android.callback.BaseCallback<T,U>);
						public start(param0: com.auth0.android.callback.BaseCallback<T,U>): void;
						public postOnSuccess(param0: T): void;
						public getErrorBuilder(): com.auth0.android.request.ErrorBuilder<U>;
						public doBuildRequest(): com.squareup.okhttp.Request;
						public addHeader(param0: string, param1: string): com.auth0.android.request.ParameterizableRequest<T,U>;
						public addParameters(param0: java.util.Map<string,any>): com.auth0.android.request.ParameterizableRequest<T,U>;
						public setCallback(param0: com.auth0.android.callback.BaseCallback<T,U>): void;
						public buildBody(): com.squareup.okhttp.RequestBody;
						public onFailure(param0: com.squareup.okhttp.Request, param1: java.io.IOException): void;
						public addParameter(param0: string, param1: any): com.auth0.android.request.ParameterizableRequest<T,U>;
						public setBearer(param0: string): com.auth0.android.request.AuthorizableRequest<T,U>;
						public postOnFailure(param0: U): void;
						public getAdapter(): com.google.gson.TypeAdapter<T>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class CredentialsDeserializer extends com.google.gson.JsonDeserializer<com.auth0.android.result.Credentials> {
						public static class: java.lang.Class<com.auth0.android.request.internal.CredentialsDeserializer>;
						public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): com.auth0.android.result.Credentials;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export abstract class GsonProvider {
						public static class: java.lang.Class<com.auth0.android.request.internal.GsonProvider>;
						public constructor();
						public static buildGson(): com.google.gson.Gson;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export abstract class JsonRequestBodyBuilder {
						public static class: java.lang.Class<com.auth0.android.request.internal.JsonRequestBodyBuilder>;
						public static createBody(param0: any, param1: com.google.gson.Gson): com.squareup.okhttp.RequestBody;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class JwksDeserializer extends com.google.gson.JsonDeserializer<java.util.Map<string,java.security.PublicKey>> {
						public static class: java.lang.Class<com.auth0.android.request.internal.JwksDeserializer>;
						public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): java.util.Map<string,java.security.PublicKey>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class ManagementErrorBuilder extends com.auth0.android.request.ErrorBuilder<com.auth0.android.management.ManagementException> {
						public static class: java.lang.Class<com.auth0.android.request.internal.ManagementErrorBuilder>;
						public from(param0: string): com.auth0.android.management.ManagementException;
						public from(param0: java.util.Map<string,any>): com.auth0.android.management.ManagementException;
						public constructor();
						public from(param0: java.util.Map<string,any>): any;
						public from(param0: string, param1: number): any;
						public from(param0: string, param1: com.auth0.android.Auth0Exception): com.auth0.android.management.ManagementException;
						public from(param0: string, param1: number): com.auth0.android.management.ManagementException;
						public from(param0: string, param1: com.auth0.android.Auth0Exception): any;
						public from(param0: string): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class OkHttpClientFactory {
						public static class: java.lang.Class<com.auth0.android.request.internal.OkHttpClientFactory>;
						public constructor();
						public createClient(param0: boolean, param1: boolean, param2: number, param3: number, param4: number): com.squareup.okhttp.OkHttpClient;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class RequestFactory {
						public static class: java.lang.Class<com.auth0.android.request.internal.RequestFactory>;
						public static DEFAULT_LOCALE_IF_MISSING: string;
						public authenticationPOST(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson): com.auth0.android.request.AuthRequest;
						public constructor();
						public POST(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: com.auth0.android.request.ErrorBuilder<any>): com.auth0.android.request.ParameterizableRequest<any,any>;
						public setClientInfo(param0: string): void;
						public GET(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: com.google.gson.reflect.TypeToken, param4: com.auth0.android.request.ErrorBuilder<any>): com.auth0.android.request.ParameterizableRequest<any,any>;
						public GET(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: java.lang.Class, param4: com.auth0.android.request.ErrorBuilder<any>): com.auth0.android.request.ParameterizableRequest<any,any>;
						public PATCH(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: java.lang.Class, param4: com.auth0.android.request.ErrorBuilder<any>): com.auth0.android.request.ParameterizableRequest<any,any>;
						public rawPOST(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: com.auth0.android.request.ErrorBuilder<any>): com.auth0.android.request.ParameterizableRequest<any,any>;
						public POST(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: com.google.gson.reflect.TypeToken, param4: com.auth0.android.request.ErrorBuilder<any>): com.auth0.android.request.ParameterizableRequest<any,any>;
						public setUserAgent(param0: string): void;
						public POST(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: java.lang.Class, param4: com.auth0.android.request.ErrorBuilder<any>): com.auth0.android.request.ParameterizableRequest<any,any>;
						public DELETE(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: com.google.gson.reflect.TypeToken, param4: com.auth0.android.request.ErrorBuilder<any>): com.auth0.android.request.ParameterizableRequest<any,any>;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class ResponseUtils {
						public static class: java.lang.Class<com.auth0.android.request.internal.ResponseUtils>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class SimpleRequest<T, U>  extends com.auth0.android.request.internal.BaseRequest<any,any> {
						public static class: java.lang.Class<com.auth0.android.request.internal.SimpleRequest<any,any>>;
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: string, param4: com.auth0.android.request.ErrorBuilder<any>);
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: com.google.gson.TypeAdapter<any>, param4: com.auth0.android.request.ErrorBuilder<any>, param5: com.auth0.android.callback.BaseCallback<any,any>);
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: string, param4: com.google.gson.reflect.TypeToken<any>, param5: com.auth0.android.request.ErrorBuilder<any>);
						public start(param0: com.auth0.android.callback.BaseCallback<any,any>): void;
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: string, param4: java.lang.Class<any>, param5: com.auth0.android.request.ErrorBuilder<any>);
						public onResponse(param0: com.squareup.okhttp.Response): void;
						public doBuildRequest(): com.squareup.okhttp.Request;
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: com.google.gson.TypeAdapter<any>, param4: com.auth0.android.request.ErrorBuilder<any>);
						public addParameters(param0: java.util.Map<string,any>): com.auth0.android.request.ParameterizableRequest<any,any>;
						public setBearer(param0: string): com.auth0.android.request.AuthorizableRequest<any,any>;
						public addHeader(param0: string, param1: string): com.auth0.android.request.ParameterizableRequest<any,any>;
						public execute(): any;
						public addParameter(param0: string, param1: any): com.auth0.android.request.ParameterizableRequest<any,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class TLS12SocketFactory {
						public static class: java.lang.Class<com.auth0.android.request.internal.TLS12SocketFactory>;
						public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
						public createSocket(param0: string, param1: number): java.net.Socket;
						public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
						public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
						public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
						public getSupportedCipherSuites(): native.Array<string>;
						public getDefaultCipherSuites(): native.Array<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class UserProfileDeserializer extends com.google.gson.JsonDeserializer<com.auth0.android.result.UserProfile> {
						public static class: java.lang.Class<com.auth0.android.request.internal.UserProfileDeserializer>;
						public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): com.auth0.android.result.UserProfile;
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module request {
				export module internal {
					export class VoidRequest<U>  extends com.auth0.android.request.internal.BaseRequest<java.lang.Void,any> implements com.squareup.okhttp.Callback  {
						public static class: java.lang.Class<com.auth0.android.request.internal.VoidRequest<any>>;
						public setBearer(param0: string): com.auth0.android.request.AuthorizableRequest<any,any>;
						public addParameters(param0: java.util.Map<string,any>): com.auth0.android.request.ParameterizableRequest<any,any>;
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: string, param4: com.auth0.android.request.ErrorBuilder<any>);
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: com.google.gson.TypeAdapter<any>, param4: com.auth0.android.request.ErrorBuilder<any>, param5: com.auth0.android.callback.BaseCallback<any,any>);
						public addHeader(param0: string, param1: string): com.auth0.android.request.ParameterizableRequest<any,any>;
						public onResponse(param0: com.squareup.okhttp.Response): void;
						public execute(): java.lang.Void;
						public addParameter(param0: string, param1: any): com.auth0.android.request.ParameterizableRequest<any,any>;
						public doBuildRequest(): com.squareup.okhttp.Request;
						public constructor(param0: com.squareup.okhttp.HttpUrl, param1: com.squareup.okhttp.OkHttpClient, param2: com.google.gson.Gson, param3: com.google.gson.TypeAdapter<any>, param4: com.auth0.android.request.ErrorBuilder<any>);
					}
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class Authentication {
					public static class: java.lang.Class<com.auth0.android.result.Authentication>;
					public getProfile(): com.auth0.android.result.UserProfile;
					public getCredentials(): com.auth0.android.result.Credentials;
					public constructor(param0: com.auth0.android.result.UserProfile, param1: com.auth0.android.result.Credentials);
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class Credentials {
					public static class: java.lang.Class<com.auth0.android.result.Credentials>;
					public getScope(): string;
					public getExpiresAt(): java.util.Date;
					public getExpiresIn(): java.lang.Long;
					public getRefreshToken(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: java.util.Date, param5: string);
					public getAccessToken(): string;
					public getIdToken(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: java.lang.Long);
					public getType(): string;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class DatabaseUser {
					public static class: java.lang.Class<com.auth0.android.result.DatabaseUser>;
					public getUsername(): string;
					public constructor(param0: string, param1: string, param2: boolean);
					public getEmail(): string;
					public isEmailVerified(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class Delegation {
					public static class: java.lang.Class<com.auth0.android.result.Delegation>;
					public constructor(param0: string, param1: string, param2: java.lang.Long);
					public getExpiresIn(): java.lang.Long;
					public getIdToken(): string;
					public getType(): string;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class UserIdentity {
					public static class: java.lang.Class<com.auth0.android.result.UserIdentity>;
					public getProfileInfo(): java.util.Map<string,any>;
					public constructor(param0: string, param1: string, param2: string, param3: boolean, param4: string, param5: string, param6: java.util.Map<string,any>);
					public getConnection(): string;
					public getAccessTokenSecret(): string;
					public getId(): string;
					public isSocial(): boolean;
					public getAccessToken(): string;
					public getProvider(): string;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module result {
				export class UserProfile {
					public static class: java.lang.Class<com.auth0.android.result.UserProfile>;
					public getId(): string;
					public getCreatedAt(): java.util.Date;
					public getNickname(): string;
					public getPictureURL(): string;
					public getUserMetadata(): java.util.Map<string,any>;
					public getIdentities(): java.util.List<com.auth0.android.result.UserIdentity>;
					public getFamilyName(): string;
					public getExtraInfo(): java.util.Map<string,any>;
					public getName(): string;
					public getAppMetadata(): java.util.Map<string,any>;
					public getGivenName(): string;
					public getEmail(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string, param4: string, param5: boolean, param6: string, param7: java.util.Date, param8: java.util.List<com.auth0.android.result.UserIdentity>, param9: java.util.Map<string,any>, param10: java.util.Map<string,any>, param11: java.util.Map<string,any>, param12: string);
					public isEmailVerified(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module util {
				export class Base64 {
					public static class: java.lang.Class<com.auth0.android.util.Base64>;
					public constructor();
					/** @deprecated */
					public static encodeUrlSafe(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module util {
				export class CheckHelper {
					public static class: java.lang.Class<com.auth0.android.util.CheckHelper>;
					public constructor();
					public static checkArgument(param0: boolean, param1: string): void;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module util {
				export class JsonRequired {
					public static class: java.lang.Class<com.auth0.android.util.JsonRequired>;
					/**
					 * Constructs a new instance of the com.auth0.android.util.JsonRequired interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module util {
				export class JsonRequiredTypeAdapterFactory {
					public static class: java.lang.Class<com.auth0.android.util.JsonRequiredTypeAdapterFactory>;
					public constructor();
					public create(param0: com.google.gson.Gson, param1: com.google.gson.reflect.TypeToken): com.google.gson.TypeAdapter;
				}
			}
		}
	}
}

declare module com {
	export module auth0 {
		export module android {
			export module util {
				export class Telemetry {
					public static class: java.lang.Class<com.auth0.android.util.Telemetry>;
					public static HEADER_NAME: string;
					public constructor(param0: string, param1: string);
					public getVersion(): string;
					public getValue(): string;
					public getLibraryVersion(): string;
					public getName(): string;
					public constructor(param0: string, param1: string, param2: string);
				}
			}
		}
	}
}

//Generics information:
//com.auth0.android.authentication.request.DatabaseConnectionRequest:2
//com.auth0.android.authentication.request.DelegationRequest:1
//com.auth0.android.callback.AuthenticationCallback:1
//com.auth0.android.callback.BaseCallback:2
//com.auth0.android.callback.Callback:1
//com.auth0.android.callback.ManagementCallback:1
//com.auth0.android.request.AuthorizableRequest:2
//com.auth0.android.request.ErrorBuilder:1
//com.auth0.android.request.ParameterizableRequest:2
//com.auth0.android.request.Request:2
//com.auth0.android.request.internal.BaseRequest:2
//com.auth0.android.request.internal.SimpleRequest:2
//com.auth0.android.request.internal.VoidRequest:1

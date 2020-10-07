import { Application } from '@nativescript/core';
import {
  Auth0Common,
  WebAuthException,
  WebAuthOptions
} from './auth0-common';

export class Auth0 extends Auth0Common {

  private account: com.auth0.android.Auth0;
  private authenticationApi: com.auth0.android.authentication.AuthenticationAPIClient;

  constructor(clientId: string, domain: string) {
    super(clientId, domain);

    this.account = new com.auth0.android.Auth0(clientId, domain);
    this.authenticationApi = new com.auth0.android.authentication.AuthenticationAPIClient(this.account);
  }

  public login(options: WebAuthOptions): Promise<any> {
    const webAuth = com.auth0.android.provider.WebAuthProvider.login(this.account);

    if (options.audience != null) {
      webAuth.withAudience(options.audience);
    }
    if (options.connection != null) {
      webAuth.withConnection(options.connection);
    }
    // .withConnectionScope("email", "profile", "calendar:read")
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
      // @ts-ignore
      webAuth.withParameters(options.parameters);
    }
    // .useCodeGrant(true)

    if (options.customTabsOptions) {
      const ctOptions = com.auth0.android.provider.CustomTabsOptions.newBuilder();

      if (options.customTabsOptions.toolbarColor) {
        ctOptions.withToolbarColor(android.graphics.Color.parseColor(options.customTabsOptions.toolbarColor));
      }
      if (options.customTabsOptions.showTitle) {
        ctOptions.showTitle(options.customTabsOptions.showTitle);
      }

      webAuth.withCustomTabsOptions(ctOptions.build());
    }

    return new Promise((resolve, reject) => {
      try {
        const activity = Application.android.foregroundActivity == null ? Application.android.startActivity : Application.android.foregroundActivity;
        webAuth.start(activity, new com.auth0.android.provider.AuthCallback({
          onFailure: (dialogOrException: android.app.Dialog | com.auth0.android.authentication.AuthenticationException) => {
            if (dialogOrException instanceof android.app.Dialog) {
              reject(new WebAuthException(dialogOrException.toString()));
            } else {
              reject(new WebAuthException(dialogOrException.getDescription()));
            }
          },
          onSuccess: (credentials: com.auth0.android.result.Credentials) => {
            resolve({
              scope: credentials.getScope(),
              expires_at: credentials.getExpiresAt(),
              expires_in: credentials.getExpiresIn(),
              refresh_token: credentials.getRefreshToken(),
              access_token: credentials.getAccessToken(),
              id_token: credentials.getIdToken(),
              type: credentials.getType(),
            });
          }
        }));
      } catch (e) {
        reject(e);
      }
    });
  }

  public logout(options: WebAuthOptions): Promise<any> {
    const webAuth = com.auth0.android.provider.WebAuthProvider.logout(this.account);

    if (options.scheme != null) {
      webAuth.withScheme(options.scheme);
    }

    if (options.customTabsOptions) {
      const ctOptions = com.auth0.android.provider.CustomTabsOptions.newBuilder();

      if (options.customTabsOptions.toolbarColor) {
        ctOptions.withToolbarColor(android.graphics.Color.parseColor(options.customTabsOptions.toolbarColor));
      }
      if (options.customTabsOptions.showTitle) {
        ctOptions.showTitle(options.customTabsOptions.showTitle);
      }

      webAuth.withCustomTabsOptions(ctOptions.build());
    }

    return new Promise((resolve, reject) => {
      try {
        const activity = Application.android.foregroundActivity == null ? Application.android.startActivity : Application.android.foregroundActivity;
        webAuth.start(activity, new com.auth0.android.provider.VoidCallback({
          onFailure: (err: com.auth0.android.authentication.AuthenticationException) => {
            reject(err);
          },
          onSuccess: () => {
            resolve(true);
          }
        }));
      } catch (e) {
        reject(e);
      }
    });
  }

  /*
  public renewCredentials(refreshToken: string): Promise<com.auth0.android.result.Credentials> {
    return new Promise((resolve, reject) => {
      try {
        this.authenticationApi
        .renewAuth(refreshToken)
        .start({
          onFailure: (error: com.auth0.android.authentication.AuthenticationException) => {
            reject(error);
          },
          onSuccess: (credentials: com.auth0.android.result.Credentials) => {
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
          onFailure: (error: com.auth0.android.authentication.AuthenticationException) => {
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

  public getUserInfo(accessToken: string): Promise<com.auth0.android.result.UserProfile> {
    return new Promise((resolve, reject) => {
      try {
        this.authenticationApi
        .userInfo(accessToken)
        .start({
          onFailure: (error: com.auth0.android.authentication.AuthenticationException) => {
            reject(error);
          },
          onSuccess: (userInfo: com.auth0.android.result.UserProfile) => {
            resolve(userInfo);
          }
        });
      } catch (e) {
        reject(e);
      }
    });
  }
  */
}

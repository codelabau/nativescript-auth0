import Context = android.content.Context;
import Uri = android.net.Uri;
import { Auth0 } from '../auth0';
import { AuthorizeResult } from './authorizeResult';
import { VoidCallback } from './voidCallback';
import { CustomTabsOptions } from './customTabsOptions';
export declare class LogoutManager {
    private static readonly TAG;
    private static readonly KEY_CLIENT_ID;
    private static readonly KEY_TELEMETRY;
    private static readonly KEY_RETURN_TO_URL;
    private readonly account;
    private readonly callback;
    private readonly parameters;
    private ctOptions;
    constructor(account: Auth0, callback: VoidCallback, returnToUrl: string, ctOptions: CustomTabsOptions | undefined);
    static startLogout(context: Context): void;
    static resume(result: AuthorizeResult): boolean;
    resumeAuthorization(data: AuthorizeResult): boolean;
    static buildLogoutUri(): Uri;
    private addClientParameters;
    private static logDebug;
}

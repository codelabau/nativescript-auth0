import { Auth0Exception } from '../auth0Exception';
import { BaseCallback } from '../callback/baseCallback';
export interface VoidCallback extends BaseCallback<void, Auth0Exception> {
}

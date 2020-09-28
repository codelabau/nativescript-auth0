import { Auth0Exception } from '../auth0Exception';
import { BaseCallback } from '../callback/baseCallback';

/**
 * Generic callback called on success/failure, that receives no payload when succeeds.
 */
export interface VoidCallback extends BaseCallback<void, Auth0Exception> {
}

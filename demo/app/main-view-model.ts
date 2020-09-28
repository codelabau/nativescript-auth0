import { Observable } from '@nativescript/core';
import { Auth0 } from 'nativescript-auth0';

export class HelloWorldModel extends Observable {
    public message: string;
    private auth0: Auth0;

    constructor() {
        super();

        this.auth0 = new Auth0('q5atQzi6DgmWBpHWRJbd7MBNa5eLBPRp', 'nativescript.auth0.com');
        this.message = 'hello';
    }

    onTap(args) {
        const button = args.object;
        this.auth0.webAuthentication({
            scope: 'openid offline_access'
        }).then((result) => {
            console.log('success');
            console.log(result);
            console.log(result.accessToken);
            console.log(result.getAccessToken());
            console.log(result.toJSON());
            this.message = JSON.stringify(result);
            console.log(JSON.stringify(result));
        }).catch((e: Error) => console.log(e, e.stack));
    }

    onLogoutTap(args) {
        const button = args.object;
        this.auth0.logout().then((result) => {
            this.message = JSON.stringify(result);
            console.log(result);
        }).catch((e: Error) => console.log(e, e.stack));
    }
}

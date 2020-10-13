import { Observable } from '@nativescript/core';
import { Auth0 } from 'nativescript-auth0';

export class HelloWorldModel extends Observable {
    public message: string;
    private auth0: Auth0;

    constructor() {
        super();

        this.auth0 = new Auth0('qKfuCe7twAYBkjhnMfQNaEQZATUuQ2vz', 'wejugo-dev.au.auth0.com');
        this.message = 'hello';
    }

    onTap(args) {
        // const button = args.object;
        // @ts-ignore
        this.auth0.login({
            scope: 'openid offline_access',
        }).then((result) => {
            console.log(JSON.stringify(result));
            this.message = JSON.stringify(result);
        }).catch((e: Error) => {
            console.log(e);
            console.log('--------');
            console.log(e.stack);
        });
    }

    onLogoutTap(args) {
        // const button = args.object;
        // @ts-ignore
        this.auth0.logout().then((result) => {
            this.message = JSON.stringify(result);
            console.log(result);
        }).catch((e: Error) => {
            console.log(e);
            console.log('--------');
            console.log(e.stack);
        });
    }
}

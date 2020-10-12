import { Application } from '@nativescript/core';

if (Application.ios) {
    @NativeClass()
    class MyDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];

        applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
            console.log('applicationWillFinishLaunchingWithOptions: ' + launchOptions)
            return true;
        }

        applicationDidBecomeActive(application: UIApplication): void {
            console.log('applicationDidBecomeActive: ' + application)
        }

        applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean {
            console.log('applicationOpenURLOptions');
            // @ts-ignore
            return A0WebAuth.resumeAuthWithURLOptions(url, options);
        }
    }

    Application.ios.delegate = MyDelegate;
}

Application.run({ moduleName: 'main-page' });

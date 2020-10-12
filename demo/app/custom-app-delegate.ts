
function setup() {
    @NativeClass()
    class CustomAppDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];

        applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
            console.log("applicationWillFinishLaunchingWithOptions: " + launchOptions)

            return true;
        }

        applicationDidBecomeActive(application: UIApplication): void {
            console.log("applicationDidBecomeActive: " + application)
        }

        /*
        applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean {
            // @ts-ignore
            return A0WebAuth.resumeAuth(url, options);
        }
        */
    }

    return CustomAppDelegate;
}

export const CustomAppDelegate = setup();

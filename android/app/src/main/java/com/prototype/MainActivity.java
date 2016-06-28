package com.prototype;

import com.facebook.react.LifecycleState;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "prototype";
    }
    private LifecycleState mLifecycleState = LifecycleState.BEFORE_RESUME;
    protected  ReactInstanceManager createReactInstanceManager() {
        ReactInstanceManager.Builder builder = ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setJSMainModuleName(getJSMainModuleName())
                .setInitialLifecycleState(mLifecycleState);

        for (ReactPackage reactPackage : getPackages()) {
            builder.addPackage(reactPackage);
        }

        String jsBundleFile = getJSBundleFile();

        if (jsBundleFile != null) {
            builder.setJSBundleFile(jsBundleFile);
        } else {
            builder.setBundleAssetName(getBundleAssetName());
        }

        return builder.build();
    }
    /**
     * Returns whether dev mode should be enabled.
     * This enables e.g. the dev menu.
     */
    @Override
    protected boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    /**
     * A list of packages used by the app. If the app uses additional views
     * or modules besides the default ones, add more packages here.
     */
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage()
        );
    }
}

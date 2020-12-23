# Music10 Mobile ![Mobile](https://github.com/dergunovd/music10/workflows/Mobile/badge.svg)

### Description

TODO

### NPM-scripts

- _android_ - Run application on Android Device/Emulator
- _android:release_ - Run application on Android Device/Emulator in release-mode
- _ios_ - Run application on Android Device/Emulator
- _start_ - Run react-native project
- _test_ - Test application using Jest
- _test:cov_ - Test application using Jest with coverage
- _lint_ - Lint sources using eslint
- _lint:fix_ - Lint sources using eslint with autofix
- _format_ - Format sources application using prettier
- _clear_ - Remove previous build artifact

### Local run
* [Environment setup](https://reactnative.dev/docs/environment-setup)
* `npm install`
* `npm run android`

### Build release APK
* Put [_release.keystore_](https://reactnative.dev/docs/signed-apk-android) to *android/app* directory
* `cd android && gradlew installRelease`
* Get apk from *android/app/build/outputs/apk/release/apk-release.apk*

### Possible problems
> com.android.builder.testing.api.DeviceException: com.android.ddmlib.InstallException: INSTALL_FAILED_UPDATE_INCOMPATIBLE: Package com.mobilenative signatures do not match previously installed version; ignoring!
* Remove application from Device
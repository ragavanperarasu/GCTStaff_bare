# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# Keep React Native classes
-keep class com.facebook.react.** { *; }
-keep class com.swmansion.reanimated.** { *; }
-keep class com.facebook.flipper.** { *; }
-keep class com.facebook.yoga.** { *; }

# Keep Vector Icons
-keep class com.oblador.vectoricons.** { *; }

# Prevent code shrinking of native modules
-keep class com.reactnative.** { *; }

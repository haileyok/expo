import { addCameraImport } from '../withCamera';

describe(addCameraImport, () => {
  it(`adds camera import to build gradle`, () => {
    expect(addCameraImport(buildGradleFixtureWithoutImport).contents).toMatchSnapshot();
  });

  it('does not add duplicate camera import to build gradle', () => {
    expect(addCameraImport(buildGradleFixtureWithImport).contents).toBe(
      buildGradleFixtureWithImport
    );
  });
});

const buildGradleFixtureWithoutImport = `
buildscript {
    ext {
        buildToolsVersion = "29.0.2"
        minSdkVersion = 21
        compileSdkVersion = 29
        targetSdkVersion = 29
    }
    repositories {
        google()
        jcenter()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:3.5.3")
    }
}

allprojects {
    repositories {
        mavenLocal()
        maven {
            url("$rootDir/../node_modules/react-native/android")
        }
        maven {
            url("$rootDir/../node_modules/jsc-android/dist")
        }
        google()
        jcenter()
        maven { url 'https://www.jitpack.io' }
    }
}
`;

const buildGradleFixtureWithImport = `
buildscript {
    ext {
        buildToolsVersion = "29.0.2"
        minSdkVersion = 21
        compileSdkVersion = 29
        targetSdkVersion = 29
    }
    repositories {
        google()
        jcenter()
    }
    dependencies {
        classpath("com.android.tools.build:gradle:3.5.3")
    }
}

allprojects {
    repositories {
        mavenLocal()
        maven {
            url("$rootDir/../node_modules/react-native/android")
        }
        maven {
            url("$rootDir/../node_modules/jsc-android/dist")
        }
        google()
        jcenter()
        maven { url 'https://www.jitpack.io' }
    }
}

// @generated begin expo-camera-import - expo prebuild (DO NOT MODIFY) sync-f244f4f3d8bf7229102e8f992b525b8602c74770
def expoCameraMavenPath = new File(["node", "--print", "require.resolve('expo-camera/package.json')"].execute(null, rootDir).text.trim(), "../android/maven")
allprojects { repositories { maven { url(expoCameraMavenPath) } } }
// @generated end expo-camera-import
`;

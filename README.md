# A. Get Started (Setup environment)

1. Nodejs: https://nodejs.org/en/ (Cài bản LTS)
2. Yarn (https://yarnpkg.com/lang/en/docs/install/#windows-stable)
3. Java SDK 8: https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
4. Visual Studio Code: https://code.visualstudio.com/Download
5. Git SCM: https://git-scm.com/download/
6. https://chocolatey.org (For Windows)
7. Xcode, Android Studio: https://developer.android.com/studio/
8. Setup ANDROID_HOME (c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk)
9. Add platform-tools to Path (c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk\platform-tools)
10. Setup JAVA_HOME (https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html)

# B. Setup Visual Studio Code Extensions:

1. Auto Rename Tag: (Downloads: 2.7M)
2. Bracket Pair Colorizer 2 (Donwloads: 842K)
3. ES7 React/Redux/GraphQL/React-Native snippets (Downloads: 1.3M)
4. Visual Studio IntelliCode (5.1M)
5. ESLint (8.9M)
6. React Native Tools (Downloads: 1.2M)
7. Prettier - Code Formatter (Downloads: 6.3M)
8. Debugger for Chrome (Downloads: 15.4M)
9. Material Icon Theme (Downloads: 5M)
10. One Dark Pro (Downloads: 7.8M)

# C. Prequisite

## C.1. Main Concepts:

1. Hello World
2. Introduction JSX
3. Render Elements
4. Components & Props
5. Typechecking With PropTypes
6. State & Lifecycle
7. Handling Events
8. Conditional Rendering
9. List & Keys
10. Refs and the DOM

# Session 01: Setup React & React Native

## 1.1 Setup React JS:

> npx create-react-app my-app

> cd my-app

> npm start

## 1.2. Practice:

> https://github.com/ngothanhtung/ReactNative-Tutorials/tree/master/Batch07/my-react-web

## 1.3. Read more:

> https://reactjs.org/docs/components-and-props.html

## 1.4. Resources:

> https://uifaces.co/

> https://picsum.photos/

## 2. Setup React Native:

1. https://reactnative.dev/
2. https://reactnative.dev/docs/getting-started
3. https://reactnative.dev/docs/environment-setup

> Get started: Select tab: React Native CLI Quickstart

> npx react-native init AwesomeProject

> cd AwesomeProject

> npx react-native start

4. npm install -g react-native-cli
5. Create new react native project: react-native init HelloWorldApp
6. Component Examples: https://facebook.github.io/react-native/docs/tutorial

# Session 02: Props & State

1. Props:

   > https://reactjs.org/docs/components-and-props.html

   > https://reactnative.dev/docs/props

2. Type-Checking:

   > Ref: https://reactjs.org/docs/typechecking-with-proptypes.html

   > Install Package: https://www.npmjs.com/package/prop-types

3. State: https://facebook.github.io/react-native/docs/state
4. Handle Event within state:

   > https://reactnative.dev/docs/handling-text-input

   > https://reactnative.dev/docs/textinput

5. Handling Touches: https://reactnative.dev/docs/handling-touches

# Session 03: React Component & Lifecycle

1. https://reactjs.org/docs/state-and-lifecycle.html
2. Theory: https://reactjs.org/docs/react-component.html
3. Diagram: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# Session 04: Styles & Layout

1. Style: https://facebook.github.io/react-native/docs/style

- add react-native-vector-icons

> yarn add react-native-vector-icons

> Open: android/app/build.gradle

> Go to end of file: paste: apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

2. Height and Width: https://facebook.github.io/react-native/docs/height-and-width
   https://facebook.github.io/react-native/docs/dimensions
3. Layout with Flexbox: https://facebook.github.io/react-native/docs/flexbox
4. Image: https://reactnative.dev/docs/image
5. ImageBackground: https://reactnative.dev/docs/imagebackground
6. StatusBar: https://reactnative.dev/docs/statusbar
7. Packages:

   > react-native-vector-icons: https://github.com/oblador/react-native-vector-icons

   > https://github.com/react-native-community/react-native-linear-gradient

   > react-native-svg

   > Browse Icons: https://oblador.github.io/react-native-vector-icons/

   > Face Stock: http://pravatar.cc/

   > Stock: http://thestocks.im/

   > https://github.com/vhpoet/react-native-styling-cheat-sheet

# Session 05: ListView

2. ScrollView: https://reactnative.dev/docs/using-a-scrollview
3. ListView: https://reactnative.dev/docs/using-a-listview
4. FlatList: https://reactnative.dev/docs/flatlist
5. SectionList: https://facebook.github.io/react-native/docs/sectionlist

# Session 06: Networking

1. Networking: https://facebook.github.io/react-native/docs/network
2. Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
3. Axios Package: https://github.com/axios/axios
4. JSON samples: https://jsonplaceholder.typicode.com/
5. Download POSTMAN Tool: https://www.getpostman.com/postman
6. API Practices:

```
- https://training.softech.cloud/api/users
  + Method: GET

- https://training.softech.cloud/api/users/login
  + Method: POST
  + Body: {"email": "youremail@gmail.com", "password": "123"}

- https://training.softech.cloud/api/users/register
  + Method: POST
  + Body: {"email": "youremail@gmail.com", "password": "123", "fullname": "Your Name"}

- Notes: POSTMAN: Method: POST, Body: Raw => JSON
```

# Session 07: React Hooks

1. Basic Hooks

- useState
- useEffect

2. Additional Hooks

- useCallback
- useMemo
- useRef

3. Advanced Hooks

- useContext
- useReducer

# Session 08: React Navigation (Version 5.x)

1.  Docs: https://reactnavigation.org/
2.  Setup (Important):
    > https://reactnavigation.org/docs/getting-started
3.  StackNavigation
    > https://reactnavigation.org/docs/stack-navigator
4.  TabNavigation

    > https://reactnavigation.org/docs/bottom-tab-navigator

    > https://reactnavigation.org/docs/material-bottom-tab-navigator

    > https://reactnavigation.org/docs/material-top-tab-navigator

5.  DrawerNavigation
    > https://reactnavigation.org/docs/drawer-navigator
6.  Nesting Navigatord
    > https://reactnavigation.org/docs/nesting-navigators

# Session 09: UI / UX & Utilities:

1. React Native Papers
2. React Native Elements
3. NativeBase
4. AsyncStorage (https://github.com/react-native-community/async-storage)
5. moment / numeral / lodash

# Session 10: Working with Form & Entry Data Validation

1. Working with form: Formik (https://jaredpalmer.com/formik/docs/guides/react-native)
2. Working with entry data validation: Yup (https://github.com/jquense/yup)
3. KeyboardAvoidingView: https://reactnative.dev/docs/keyboardavoidingview

# Session 11: Firebase

## 11.1. Setup:

1. https://firebase.google.com/
2. Register a Google account
3. React Native Firebase: https://rnfirebase.io/
4. Basic: http://invertase.link/get-started-basic

- Download sourcecode (ZIP)
- Unzip
- Install packages: Root project: type: npm install / yarn install
- Root project: type: npm run rename, project name: jobs, company name: softech
- Package name: com.softech.jobs

5. Add Google Services files (plist & JSON):

- Login: https://console.firebase.google.com/ (email / password)
- Add firebase project: project name: softech - jobs
- Go to project dashboard
- Go to project setting: Project Overview -> Setting Icon -> Project settings
- Add mobile app: Your apps -> Select android app -> type package name: com.softech.jobs, app name: Softech Jobs -> Click Button [Register app]
- Download config file: Root project / android / app / google-services.json

6. Run project: react-native run-android

Continue: README of this project

## 11.2. Cloud Filestore & Realtime

- Dashboard -> Database -> Filestore
- Start in test mode -> Click button [Enable]
- https://rnfirebase.io/docs/v5.x.x/getting-started
- https://firebase.google.com/docs/firestore/manage-data/structure-data

1. Cloud Firestore: https://firebase.google.com/docs/firestore/quickstart
2. Query Data: https://firebase.google.com/docs/firestore/query-data/queries
3. Get Data: https://firebase.google.com/docs/firestore/query-data/get-data
4. Add / Update Data: https://firebase.google.com/docs/firestore/manage-data/add-data
5. Delete Data: https://firebase.google.com/docs/firestore/manage-data/delete-data
6. Realtime Update: https://firebase.google.com/docs/firestore/query-data/listen

## 11.3. Authentication

1. Dashboard -> Authencation -> Sign-in Method -> Enable: Email / Password, Phone
2. Docs: https://rnfirebase.io/docs/v5.x.x/auth/getting-started
3. Refs: https://rnfirebase.io/docs/v5.x.x/auth/reference/auth
4. Phone Authentication:

- Dashboard -> Authencation -> Sign-in Method -> Phone numbers for testing (optional)
- Get SHA-1 key: https://stackoverflow.com/questions/27609442/how-to-get-the-sha-1-fingerprint-certificate-in-android-studio-for-debug-mode
- Dashboard -> Project Settings -> General -> Select Android App -> Paste SHA-1

# 11.4. Backend with Google Cloud Function

1. Setup firebase tools:

- npm install -g firebase-tools
- yarn add global firebase-tools

2. Login / Logout: firebase login / firebase logout
3. Init project: (Project folder)

- Terminal: firebase init =>
- OPTIONS: => Choose Cloud Function =>
- OPTIONS: => Choose Project =>
- OPTION: => Choose Language => Javascript
- SELECT DEFAULTS

4. OPTIONS => DONE
5. Hello Function: Uncomment
6. Deploy: firebase deploy
7. Test API

# Session 12 Notification with OneSignal

# Session 13: REDUX & SAGA (BONUS & OPTIONAL)

1. Theory: https://redux.js.org/introduction/getting-started
2. Usage with React: https://react-redux.js.org
3. Diagram: https://kuanhsuh.github.io/2017/09/28/What-s-Redux-and-how-to-use-it/
4. Install packages: redux, react-redux,

- (npm install --save redux),
- (npm isntall --save react-redux),
- (npm isntall --save --dev redux-devtools-extension)

5. Coding:

- types (constants)
- actions
- reducers
- components
- root reducers (store.js)
- store (store.js)
- App.js (config Provider with store)

6. Debug:

- Download tool: https://github.com/jhen0409/react-native-debugger/releases

7. redux-thunk

- Install: npm install --save redux-thunk
- Actions: PENDING, SUCCESS, ERROR
- Async Action (axios / fetch)
- Config middleware (store.js)

8. redux-saga

- Install: npm install --save redux-saga / yarn add redux-saga
- sagas
- rootSagas
-

# Bonus 1: EXPRESSJS & MONGODB (BONUS & OPTIONAL)

1. Expressjs: https://expressjs.com/en/starter/generator.html
2. Basic Routing: https://expressjs.com/en/starter/basic-routing.html
3. Routing: https://expressjs.com/en/guide/routing.html
4. Mongodb: https://www.mongodb.com/download-center/community
5. Tools: https://www.mongodb.com/download-center/compass
6. Others: RoboMongo: https://robomongo.org/
7. Nodejs Mongodb Driver: http://mongodb.github.io/node-mongodb-native/3.1/
8. Databases with Express: https://expressjs.com/en/guide/database-integration.html

# Bonus 2: Release

1. Android icon: https://romannurik.github.io/AndroidAssetStudio/index.html
2. iOs icon: https://appicon.co/
3. https://facebook.github.io/react-native/docs/signed-apk-android
4. https://play.google.com/apps/publish

# Bonus 3: Project:

1. react-native-firebase

- rnfirebase.io

2. react-navigation

- npm install --save react-navigation
- npm install --save react-native-gesture-handler
- react-native link react-native-gesture-handler

3. react-native-vector-icons

- npm install --save react-native-vector-icons
- react-native link react-native-vector-icons

4. redux-saga

- redux
- react-redux
- redux-saga

5. UI: react-native-elements / react-native-paper / nativebase

- npm install react-native-elements --save

6. axios

7. Open File:

- https://github.com/Elyx0/react-native-document-picker

8. Open Camera / Photos gallery

- https://github.com/ivpusic/react-native-image-crop-picker

# A. Some useful websites

## References:

1. https://flatuicolors.com
2. https://github.com/oblador/react-native-vector-icons

# B. Expressjs

## B.1 References:

1. Offical Site: https://expressjs.com
2. Install CLI tool: https://expressjs.com/en/starter/generator.html
3. Basic Routing: https://expressjs.com/en/starter/basic-routing.html
4. Run server forever: http://pm2.keymetrics.io/ (npm install pm2 -g)
5. Nodemon is a utility that will monitor for any changes in your source and automatically restart your server. Perfect for development (https://nodemon.io)

## B.2 Step by step:

1. Install CLI
2. Create a project with express tool
3. Run project: npm start

# C. Firebase

1. https://firebase.googleblog.com/2016/01/the-beginners-guide-to-react-native-and_84.html

```

```

# Stocks:

1. All stocks: http://thestocks.im
2. Font Icons: https://oblador.github.io/react-native-vector-icons
3. Image Icons: https://www.flaticon.com
4. Color: https://flatuicolors.com
5. Face / Avatar: http://pravatar.cc
6. Animatable (Animation): https://github.com/oblador/react-native-animatable

# Videos:

1. Videos: https://www.youtube.com/watch?v=kNHuLOXR5T0&list=PLWBrqglnjNl31S91FFE63DtuRc9v9LSGl
2. Style Cheat Sheet
   https://github.com/vhpoet/react-native-styling-cheat-sheet
3. FlexBox: https://www.youtube.com/watch?v=Y8zMYaD1bz0&list=PL4cUxeGkcC9i3FXJSUfmsNOx8E7u6UuhG

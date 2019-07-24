# Get Started (Setup environment)

1. Nodejs: https://nodejs.org/en/
2. Yarn (https://yarnpkg.com/lang/en/docs/install/#windows-stable)
3. Java SDK 8: https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
4. Visual Studio Code: https://code.visualstudio.com/Download
5. Git SCM: https://git-scm.com/download/
6. https://chocolatey.org (For Windows)
7. Xcode, Android Studio: https://developer.android.com/studio/
8. Setup ANDROID_HOME (c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk)
9. Add platform-tools to Path (c:\Users\YOUR_USERNAME\AppData\Local\Android\Sdk\platform-tools)
10. Setup JAVA_HOME (https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html)

# Visual Studio Code Extensions:

1. Auto Rename Tag: (Downloads: 1.1M)
2. Bracket Pair Colorizer 2 (Donwloads: 66K)
3. ES7 React/Redux/GraphQL/React-Native snippets (Downloads: 1.1M)
4. React Native Tools (Downloads: 2.9M)
5. Material Icon Theme (Downloads: 5M)
6. One Dark Pro (Downloads: 7.8M)
7. Debugger for Chrome (Downloads: 15.4M)
8. Prettier (Downloads: 7.8M)

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

# Session 01: Setup

1. https://facebook.github.io/react-native/
2. https://facebook.github.io/react-native/docs/getting-started
3. Get started: Select tab: Building Projects with Native Code
4. npm install -g react-native-cli
5. Create new react native project: react-native init HelloWorldApp
6. Component Examples: https://facebook.github.io/react-native/docs/tutorial

# Session 02: Props

1. Props: https://facebook.github.io/react-native/docs/props
2. Type-Checking: https://reactjs.org/docs/typechecking-with-proptypes.html
3. Install Package: https://www.npmjs.com/package/prop-types

# Session 03: State

1. https://reactjs.org/docs/state-and-lifecycle.html
2. State: https://facebook.github.io/react-native/docs/state
3. Handle Event within state: https://facebook.github.io/react-native/docs/handling-text-input
4. TextInput ref: https://facebook.github.io/react-native/docs/textinput

# Session 04: Styles & Layout

1. Style: https://facebook.github.io/react-native/docs/style
2. Height and Width: https://facebook.github.io/react-native/docs/height-and-width
   https://facebook.github.io/react-native/docs/dimensions
3. Layout with Flexbox: https://facebook.github.io/react-native/docs/flexbox
4. Package: React-Native-Vector-Icons: https://github.com/oblador/react-native-vector-icons
5. Browse Icons: https://oblador.github.io/react-native-vector-icons/
6. Face Stock: http://pravatar.cc/
7. Stock: http://thestocks.im/
8. https://github.com/vhpoet/react-native-styling-cheat-sheet
9. https://github.com/react-native-community/react-native-linear-gradient

# Session 05: Handling Events & ListView & Networking

1. Handling Text Input: https://facebook.github.io/react-native/docs/handling-text-input
2. Handling Touches: https://facebook.github.io/react-native/docs/handling-touches
3. ScrollView: https://facebook.github.io/react-native/docs/using-a-scrollview
4. ListView: https://facebook.github.io/react-native/docs/using-a-listview
5. FlatList: https://facebook.github.io/react-native/docs/flatlist
6. SectionList: https://facebook.github.io/react-native/docs/sectionlist
7. Networking: https://facebook.github.io/react-native/docs/network
8. Fetch API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
9. Axios Package: https://github.com/axios/axios
10. JSON samples: https://jsonplaceholder.typicode.com/
11. Download POSTMAN Tool: https://www.getpostman.com/postman
12. UI + API Practices:

```
- https://softech.dev/api/training/users
  + Method: GET

- https://softech.dev/api/training/users/login
  + Method: POST
  + Body: {"email": "youremail@gmail.com", "password": "123"}

- https://softech.dev/api/training/users/register
  + Method: POST
  + Body: {"email": "youremail@gmail.com", "password": "123", "name": "Your Name"}

- Notes: POSTMAN: Method: POST, Body: Raw => JSON
```

13. UI Practices:
    13.1. https://github.com/react-native-community/react-native-linear-gradient
    13.2. https://akveo.github.io/react-native-ui-kitten/#/home

# Session 06: React Navigation

1.  Docs: https://reactnavigation.org
2.  Setup (Please carefully): https://reactnavigation.org/docs/en/getting-started.html
3.  StackNavigation
4.  TabNavigation
5.  DrawerNavigation
6.  SwitchNavigation

```
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AuthenticationNavigator = createStackNavigator({
  SignIn: SignInScreen,
  ForgotPassword: ForgotPasswordScreen
});

const AppNavigator = createSwitchNavigator({
  Auth: AuthenticationNavigator,
  Home: HomeScreen
});

const AppContainer = createAppContainer(AppNavigator);
```

# Session 07: Firebase

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

## Cloud Filestore

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

## Realtime

1. Dashboard -> Database -> Realtime
2. Rules: Set: read: true, write: true

## Notification

1. Token:
2. Send:

- Project Settings -> Cloud Message
- POSTMAN: POST: https://fcm.googleapis.com/fcm/send
- HEADER (2 fields): Content-Type: application/json, Authorization: key:[Server Key]
- Body: https://firebase.google.com/docs/cloud-messaging/http-server-ref?authuser=0
  ```
  {
    "to": "dMIRpQFyq3M:APA91bHZyAnwiyJjGvhAqGSjbrrSxVcQvYJXZSTesnL_yYEeAvy4deRUbeaQxwQH_dPttfuDTPr0EPbYpH_L6uHjcFwDHT0fE79aSWmoLSlDDB0s0KToBMtZqKiO2FlscLjaLGrGUkZJ",
    "notification": {
      "body": "Chi tiet lich nghi HE 2019",
      "title": "THONG BAO NGHI HE",
      "content_available": false,
      "priority": "high",
      "sound": "default",
      "tag": "thongbao",
      "color": "#ff0099",
      "icon": "default"
    },
    "data": {
      "bonus": "BAI TAP VE NHA"
    }
  }
  ```

## Authentication

1. Dashboard -> Authencation -> Sign-in Method -> Enable: Email / Password, Phone
2. Docs: https://rnfirebase.io/docs/v5.x.x/auth/getting-started
3. Refs: https://rnfirebase.io/docs/v5.x.x/auth/reference/auth
4. Phone Authentication:

- Dashboard -> Authencation -> Sign-in Method -> Phone numbers for testing (optional)
- Get SHA-1 key: https://stackoverflow.com/questions/27609442/how-to-get-the-sha-1-fingerprint-certificate-in-android-studio-for-debug-mode
- Dashboard -> Project Settings -> General -> Select Android App -> Paste SHA-1

## Cloud Function

1. Setup firebase tools: npm install -g firebase-tools
2. Login / Logout: firebase login
3. Init project: firebase init => Choose Cloud Function => Choose Project => Choose Language => SELECT DEFAULT OPTIONS => DONE
4. Hello Function: Uncomment
5. Deploy: firebase deploy
6. Test API

## React Native With Firebase

1. https://rnfirebase.io/
2. Documents: https://rnfirebase.io/docs/v5.x.x/getting-started
3. Starter Kit: https://rnfirebase.io/docs/v5.x.x/installation/basic-kit

- Manual install for Android (Video): https://youtu.be/_7iKm233n_M
- Manual install for iOS (Video): https://youtu.be/qiOGMcX6Xtw

4. Send Notification (Google API): https://firebase.google.com/docs/cloud-messaging/http-server-ref

- Send a notification (Admin SDK - Cloud Function): https://firebase.google.com/docs/cloud-messaging/admin/send-messages
- Manage Topic: https://firebase.google.com/docs/cloud-messaging/admin/manage-topic-subscriptions

# Session 08: React Component & Lifecycle

1. Theory: https://reactjs.org/docs/react-component.html
2. Diagram: http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
3. Examples:

# Session 09: UI / UX

1. react-native-paper
2. react-native-elements
3. native base

# Session 10: REDUX & SAGA

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

# Session 11: Backend with Google Cloud Function

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

# Session 12: EXPRESSJS & MONGODB (BONUS)

1. Expressjs: https://expressjs.com/en/starter/generator.html
2. Basic Routing: https://expressjs.com/en/starter/basic-routing.html
3. Routing: https://expressjs.com/en/guide/routing.html
4. Mongodb: https://www.mongodb.com/download-center/community
5. Tools: https://www.mongodb.com/download-center/compass
6. Others: RoboMongo: https://robomongo.org/
7. Nodejs Mongodb Driver: http://mongodb.github.io/node-mongodb-native/3.1/
8. Databases with Express: https://expressjs.com/en/guide/database-integration.html

# Session 13: Release

1. Android icon: https://romannurik.github.io/AndroidAssetStudio/index.html
2. iOs icon: https://appicon.co/
3. https://facebook.github.io/react-native/docs/signed-apk-android
4. https://play.google.com/apps/publish

# Project:

1. rnfirebase.io

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

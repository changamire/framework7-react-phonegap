# Framework7 v3 React PhoneGap template

This project is inspired by Ben Compton's original work on Framework7 and React. It provides a template for an application based on the excellent [Framework7](https://framework7.io/) framework using [ReactJS](https://reactjs.org/), and all wrapped up with [PhoneGap](https://phonegap.com/).

Crucially, and in contrast to other starter templates available, the project does not rely on the [Create React App](https://github.com/facebook/create-react-app) tool, deliberately in order to expose the configuration to the developer.

To get started, clone this repository as whatever you want to name your app:

```
git clone https://github.com/changamire/framework7-react-phonegap.git my-app
```

Running the app, local dev server with live reload:

```
npm install
npm run start
```

To build your app for deployment, run:

```
npm run build
```

The www folder will then contain all of your app's files, optimized and ready for deployment.

To build the app for iOS and Android, you can zip the output www directory and upload the archive to 

[https://build.phonegap.com/](https://build.phonegap.com/)

Or install Phonegap locally and build deployable artifacts there.

To run the application in an iOS simulator:

```
cordova platform add ios
npm run build
cordova run ios
```
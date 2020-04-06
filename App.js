/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//Pull in AppNavigator from the navigation folder
import AppNavigator from './navigation/AppNavigator'

export default function App() {
  return (
    <AppNavigator />
  );
}



// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {Asset} from 'expo-asset';
// import {AppLoading} from 'expo';

// //Pull in AppNavigator from the navigation folder
// import AppNavigator from './navigation/AppNavigator';

// import Login from './screens/login.js';

// // export default function App() {
// //   return (
// //     <AppNavigator />
// //   );
// // }

// function cacheImages(images) {
//   return images.map(image => {
//     if (typeof image === 'string') {
//       return Image.prefetch(image);
//     } else {
//       return Asset.fromModule(image).downloadAsync();
//     }
//   });
// }

// export default class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isReady: false,
//     };
//   }

//   async _loadAssetsAsync() {
//     const imageAssets = cacheImages([require('./assets/landing2.png')]);

//     await Promise.all([...imageAssets]);
//   }

//   render() {
//     // if state is not ready, display app loading, ow return the app
//     // if (!this.state.isReady) {
//     //   return (
//     //     <AppLoading
//     //       startAsync={this._loadAssetsAsync}
//     //       onFinish={() => this.setState({isReady: true})}
//     //       onError={console.warn}
//     //     />
//     //   );
//     // }
//     return <Login />;
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
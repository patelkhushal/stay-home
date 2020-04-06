import React from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';

import Svg, {Image, Circle, ClipPath} from 'react-native-svg';
import Animated, {Easing} from 'react-native-reanimated';
import {TapGestureHandler, State} from 'react-native-gesture-handler';

import {Ionicons} from '@expo/vector-icons';
import AppNavigator from '../navigation/AppNavigator';

const {width, height} = Dimensions.get('window');
const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
  concat,
} = Animated;

function runTiming(clock, value, dest) {
  // initial state for animation
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  // configure animation
  const config = {
    duration: 1000, // run over one second
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease),
  };

  // run animation
  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position,
  ]);
}

// const TabIcon = props => (
//   <Ionicons
//     name={'md-apps'}
//     size={35}
//     color={props.focused ? 'grey' : 'darkgrey'}
//   />
// );

class Login extends React.Component {
  // static navigationOptions = {
  //   tabBarIcon: TabIcon,
  // };

  constructor() {
    super();
    this.state = {
      doneLogin: false,
    };

    this.buttonOpacity = new Value(1);
    this.onStateChange = event([
      {
        nativeEvent: ({state}) =>
          block([
            // start with UNDETERMINED state, go through other state, then when the button is released, state of tab gesture handler = END
            cond(
              eq(state, State.END),
              set(this.buttonOpacity, runTiming(new Clock(), 1, 0)),
            ),
          ]),
      },
    ]);

    this.onCloseState = event([
      {
        nativeEvent: ({state}) =>
          block([
            cond(
              eq(state, State.END),
              // detect end of clock, change button opacity to
              set(this.buttonOpacity, runTiming(new Clock(), 0, 1)),
            ),
          ]),
      },
    ]);

    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      // want button to go down by 100 when clicked
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP,
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      // want background to go up by one-third of the screen
      outputRange: [-height / 3 - 50, 0],
      extrapolate: Extrapolate.CLAMP,
    });

    this.textInputZindex = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      // when button opacity is 0, zIndex=1, when button is visible, zIndex=-1
      outputRange: [1, -1],
      extrapolate: Extrapolate.CLAMP,
    });

    this.textInputY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      // when button opacity is 0, want textInputY to be at its current position 0
      // when button is visible, move up by 100
      outputRange: [1, -1],
      extrapolate: Extrapolate.CLAMP,
    });

    this.textInputOpacity = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      // when button opacity=0, textInputOpacity=1, when button is visible, textInputOpacity=0
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP,
    });

    this.rotateCross = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      // 180 when button opacity=0, 360 when button opacity=1
      outputRange: [180, 360],
      extrapolate: Extrapolate.CLAMP,
    });
  }

  render() {
    if (!this.state.doneLogin) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <Animated.View
            style={{
              ...StyleSheet.absoluteFill,
              transform: [{translateY: this.bgY}],
            }}>
            <Svg height={height + 50} width={width}>
              <ClipPath id="clip">
                <Circle r={height + 50} cx={width / 2} />
              </ClipPath>
              <Image
                href={require('../assets/landing2.png')}
                backgroundColor="white"
                width={width}
                //   height={height + 50}
                //   height={height / 2}
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#clip)"
              />
            </Svg>
          </Animated.View>
          <View style={{height: height / 2, justifyContent: 'center'}}>
            <Animated.Text
              style={{
                ...styles.appName,
                opacity: this.buttonOpacity,
              }}>
              Stay Home
            </Animated.Text>
            <TapGestureHandler onHandlerStateChange={this.onStateChange}>
              <Animated.View
                style={{
                  ...styles.button,
                  opacity: this.buttonOpacity,
                  transform: [{translateY: this.buttonY}],
                }}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>SIGN IN</Text>
              </Animated.View>
            </TapGestureHandler>
            <Animated.View
              style={{
                ...styles.button,
                backgroundColor: '#2E71DC',
                opacity: this.buttonOpacity,
                transform: [{translateY: this.buttonY}],
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
                SIGN IN WITH FACEBOOK
              </Text>
            </Animated.View>
            <Animated.View
              style={{
                // make content one layer back
                zIndex: this.textInputZindex,
                opacity: this.textInputOpacity,
                transform: [{translateY: this.textInputY}],
                height: height / 3 + 150,
                ...StyleSheet.absoluteFill,
                top: null,
                justifyContent: 'center',
              }}>
              <TapGestureHandler onHandlerStateChange={this.onCloseState}>
                <Animated.View style={styles.closeButton}>
                  <Animated.Text
                    style={{
                      fontSize: 15,
                      transform: [{rotate: concat(this.rotateCross, 'deg')}],
                    }}>
                    X
                  </Animated.Text>
                </Animated.View>
              </TapGestureHandler>
              <TextInput
                placeholder="EMAIL"
                style={styles.textInput}
                placeholderTextColor="black"
              />
              <TextInput
                placeholder="PASSWORD"
                style={styles.textInput}
                placeholderTextColor="black"
              />
              <Animated.View style={styles.button}>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>SIGN IN</Text>
              </Animated.View>
            </Animated.View>
          </View>
        </View>
      );
    }
    return <AppNavigator />;
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  button: {
    backgroundColor: 'white',
    height: 64,
    marginHorizontal: 24,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'rgba(153, 153, 153, 0.8)',
    shadowOpacity: 0.5,
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 24,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -20,
    left: width / 2 - 24,
    shadowOffset: {width: 2, height: 2},
    shadowColor: 'rgba(153, 153, 153, 0.8)',
    shadowOpacity: 0.5,
  },
  textInput: {
    height: 56,
    borderRadius: 32,
    borderWidth: 0.5,
    marginHorizontal: 24,
    paddingLeft: 24,
    marginVertical: 12,
    borderColor: 'rgba(0,0,0,0.2)',
  },
});
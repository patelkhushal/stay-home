import React from 'react';
import { View, StyleSheet, Text,  TouchableOpacity} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
Geolocation.getCurrentPosition(info => (info));

import { Ionicons } from '@expo/vector-icons';

const TabIcon = (props) => (
  <Ionicons
    name={'md-home'}
    size={35}
    color={props.focused ? 'grey' : 'darkgrey'}
  />
)

export default class home extends React.Component {

  static navigationOptions = {
    tabBarIcon: TabIcon
  };

  state = {
    location: null
};

findCoordinates = () => {
    Geolocation.getCurrentPosition(
        position => {
            const location = JSON.stringify(position);
            this.setState({ location });
        },
        error => Alert.alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
};
  render() {
    return (
      <View style={styles.container}>
         {this.findCoordinates()}
          <Text style={styles.welcome}>Find My Coords?</Text>
          <Text>Location: {this.state.location}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
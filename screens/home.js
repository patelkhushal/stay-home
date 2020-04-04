import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
Geolocation.getCurrentPosition(info => (info));
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import moment from "moment";

import { Ionicons } from '@expo/vector-icons';

const TabIcon = (props) => (
    <Ionicons
        name={'md-home'}
        size={35}
        color={props.focused ? 'grey' : 'darkgrey'}
    />
)

// console.log(moment([2019, 3, 29, 21, 00]).fromNow())

export default class home extends React.Component {

    static navigationOptions = {
        tabBarIcon: TabIcon
    };

    state = {
        location: null,
        fill: null,
    };

    componentDidMount() {
        var currtime = moment(moment.utc().subtract(4, 'hours').format("YYYY-MM-DD HH:mm:ss.SSS"))
        var end = moment("2020-04-02 20:48:14.994")
        var duration = moment.duration(currtime.diff(end));
        var hours = duration.asHours();
        setInterval(() => (

            this.setState(
                { fill: parseInt(hours) % 24 }
            )
        ), 1000);
    }

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
                < Text h1> You have 1000 Points. Stay Home to earn more.</Text >
                <Text h1>Heading 1</Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                {this.findCoordinates()}
                {/* <Text style={styles.welcome}>Find My Coords?</Text>
          <Text>Location: {this.state.location}</Text> */}
                <AnimatedCircularProgress
                    size={200}
                    width={20}
                    fill={this.state.fill}
                    tintColor="#00e0ff"
                    backgroundColor="#3d5875">
                    {
                        (fill) => (
                            <Text>
                                {this.state.fill}
                            </Text>
                        )
                    }
                </AnimatedCircularProgress>
                <Text>hrs inside the home today. Good Job</Text>
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
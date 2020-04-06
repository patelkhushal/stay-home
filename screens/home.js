import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Geolocation from '@react-native-community/geolocation';
Geolocation.getCurrentPosition((info) => info);
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {BarChart, XAxis} from 'react-native-svg-charts';
import moment from 'moment';
// console.log(moment([2019, 3, 29, 21, 00]).fromNow())
export default class home extends React.Component {
  state = {
    location: null,
    fill: null,
  };
  componentDidMount() {
    var currtime = moment(
      moment.utc().subtract(4, 'hours').format('YYYY-MM-DD HH:mm:ss.SSS'),
    );
    var end = moment('2020-04-04 00:00:00.00');
    var duration = moment.duration(currtime.diff(end));
    var hours = duration.asHours();
    // setInterval(() => this.setState({fill: parseInt((parseInt(hours) / 24) * 100)}), 100);
  }
  findCoordinates = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);
        this.setState({location});
      },
      (error) => Alert.alert(error.message),
      // {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };
  render() {
    const data = [15, 10, 16, 8, 5, 20, 15];
    return (
      <View style={styles.mainContainer}>
        <Header
          backgroundColor="teal"
          centerComponent={{
            text: 'StayHome',
            style: {color: '#fff', fontSize: 20},
          }}
          rightComponent={{icon: 'home', color: '#fff'}}
        />
        {this.findCoordinates()}
        <Text
          style={{
            paddingTop: 18,
            paddingBottom: 15,
            textAlign: 'center',
            color: 'darkslategray',
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Hours stayed inside home today
        </Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 30,
          }}>
          <AnimatedCircularProgress
            size={225}
            width={25}
            fill={parseInt((21 / 24) * 100)}
            // fill={this.state.fill}
            tintColor="teal"
            rotation={-90}
            backgroundColor="silver">
            {() => (
              <Text style={{fontWeight: 'bold', color: 'teal', fontSize: 25}}>
                {/* {parseInt((this.state.fill / 100) * 24)} */}
                {21} hrs
              </Text>
            )}
          </AnimatedCircularProgress>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <View style={{flexDirection: 'column'}}>
            <AnimatedCircularProgress
              size={100}
              width={10}
              fill={50}
              tintColor="teal"
              rotation={-90}
              backgroundColor="silver">
              {() => (
                <Text style={{fontWeight: 'bold', color: 'teal', fontSize: 20}}>
                  {7} <Icon2 name="fire" color={'teal'} size={20} />
                </Text>
              )}
            </AnimatedCircularProgress>
            <Text
              style={{
                paddingTop: 10,
                paddingLeft: 28,
                fontWeight: 'bold',
                color: 'darkslategray',
              }}>
              Streak
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <AnimatedCircularProgress
              size={100}
              width={10}
              fill={87}
              tintColor="teal"
              rotation={-90}
              backgroundColor="silver">
              {() => (
                <Text style={{fontWeight: 'bold', color: 'teal', fontSize: 15}}>
                  <Icon3 name="today" color={'teal'} size={25} />
                </Text>
              )}
            </AnimatedCircularProgress>
            <Text
              style={{
                paddingTop: 10,
                paddingLeft: 4,
                fontWeight: 'bold',
                color: 'darkslategray',
              }}>
              Earned Today
            </Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <AnimatedCircularProgress
              size={100}
              width={10}
              fill={85}
              tintColor="teal"
              rotation={-90}
              backgroundColor="silver">
              {() => (
                <Text style={{fontWeight: 'bold', color: 'teal', fontSize: 15}}>
                  <Icon name="star-half" color={'teal'} size={30} />
                </Text>
              )}
            </AnimatedCircularProgress>
            <Text
              style={{
                paddingTop: 10,
                paddingLeft: 4,
                fontWeight: 'bold',
                color: 'darkslategray',
              }}>
              Next Reward
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
          }}></View>
        <XAxis
          style={{marginHorizontal: -10, paddingTop: 50}}
          data={data}
          formatLabel={(value, index) => data[index]}
          contentInset={{left: 40, right: 50}}
          svg={{fontSize: 13, fill: 'darkslategray'}}
        />
        <BarChart
          style={{flex: 1}}
          data={data}
          contentInset={{top: 10, bottom: 10, left: 5, right: 5}}
          svg={{fill: '#3A8F98'}}
        />
        <Text style={styles.text}>Hours stayed at home in last 7 days</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingTop: 80,
  },
  text: {
    paddingTop: 5,
    paddingBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'darkslategray',
    backgroundColor: 'white',
  },
});
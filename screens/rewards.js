// import React, { Component, useReducer } from 'react';
// import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
// import { Alert } from 'react-native';
import {Header} from 'react-native-elements';


// //import AwesomeButton from "react-native-really-awesome-button";

// var timHortons = 450;
// var starbacks = 700;
// var lyft = 1000;
// var netflix = 1300;
// var uberEats = 1500;
// var uber = 1700;
// var spotify = 2000;


// export class Rewards extends Component {

//     constructor() {
//         super()
//         this.state = {
//             points: 1000,
//             used_timHortons: false,
//             used_starbacks: false,
//             used_lyft: false,
//             used_netflix: false,
//             used_uberEats: false,
//             used_uber: false,
//             used_spotify: false
//         }
//     }

//     _onPressButton = (data) => {
//         if (data > this.state.points) {
//             Alert.alert('This reward has not been unlocked yet')
//         }
//         else {
//             if (data == timHortons) {
//                 if (this.state.used_timHortons) {
//                     Alert.alert('Redeemed', 'This award has been redeem already!')
//                 }
//                 else {
//                     this.setState({ used_timHortons: true })

//                     var new_points = this.state.points - data
//                     this.setState({ points: new_points })
//                 }
//             }

//             else if (data == starbacks) {
//                 if (this.state.used_starbacks) {
//                     Alert.alert('Redeemed', 'This award has been redeem already!')
//                 }
//                 else {

//                     var new_points = this.state.points - data
//                     this.setState({ used_starbacks: true })
//                 }
//             }

//             else if (data == lyft) {
//                 if (this.state.used_netflix) {
//                     Alert.alert('Redeemed', 'This award has been redeem already!')
//                 }
//                 else {

//                     var new_points = this.state.points - data
//                     this.setState({ points: new_points })
//                     this.setState({ used_lyft: true })
//                 }
//             }
//             else if (data == netflix) {
//                 if (this.state.used_netflix) {
//                     Alert.alert('Redeemed', 'This award has been redeem already!')
//                 }
//                 else {

//                     var new_points = this.state.points - data
//                     this.setState({ points: new_points })
//                     this.setState({ used_netflix: true })
//                 }
//             }
//             else if (data == uberEats) {
//                 if (this.state.used_uberEats) {
//                     Alert.alert('Redeemed', 'This award has been redeem already!')
//                 }
//                 else {

//                     var new_points = this.state.points - data
//                     this.setState({ points: new_points })
//                     this.setState({ used_uberEats: true })
//                 }
//             }
//             else if (data == uber) {
//                 if (this.state.used_uber) {
//                     Alert.alert('Redeemed', 'This award has been redeem already!')
//                 }
//                 else {

//                     var new_points = this.state.points - data
//                     this.setState({ points: new_points })
//                     this.setState({ used_uber: true })
//                 }
//             }
//             else if (data == spotify) {
//                 if (this.state.used_spotify) {
//                     Alert.alert('Redeemed', 'This award has been redeem already!')
//                 }

//                 else {

//                     var new_points = this.state.points - data
//                     this.setState({ points: new_points })
//                     this.setState({ used_spotify: true })
//                 }
//             }
//         }
//     }

//     render() {
//         return (

//             <View style={styles.Container}>
//                 <Header
//                     backgroundColor="teal"
//                     centerComponent={{
//                         text: 'StayHome',
//                         style: { color: '#fff', fontSize: 20 },
//                     }}
//                     rightComponent={{ icon: 'home', color: '#fff' }}
//                 />
//                 <View style={styles.TabContainer}>
//                 <Image
//                                 source=
//                                 {require('../Images/coin.png')}
//                                 style={styles.ImageIconStyle2}
//                             />
//                         <Text style={styles.TabTextStyle}> {this.state.points} </Text>
//                     </View>
                
//                 <ScrollView>


//                     <View style={styles.MainContainer}>
//                         <View style={styles.ButtonStyle}>
//                             <Image
//                                 source=
//                                 {require('../Images/TimHortons.png')}
//                                 style={styles.ImageIconStyle}
//                             />
//                             <View style={styles.TextContainer}>
//                                 <Text style={styles.TextStyle}>Tim Hortons Points </Text>
//                                 <Text style={{ fontSize: 11, paddingBottom: 6 }}>Get a free coffee at your next visit to Time Hortons.</Text>
//                                 <Text style={{ fontSize: 8, fontWeight: '700' }}>* Terms and Conditions Applied </Text>
//                             </View>
//                             <View style={styles.SeparatorLine} />

//                             <View style={styles.PointsContainer}>
//                                 <Text style={styles.PointTextStyle}> {timHortons} </Text>
//                                 <TouchableOpacity onPress={() => this._onPressButton(timHortons)} style={[styles.PointStyle, { opacity: this.state.points > timHortons && !(this.state.used_timHortons) ? 1 : 0.2 }]} activeOpacity={0.5}>
//                                     <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}> Redeem </Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>


//                         <View style={styles.ButtonStyle}>
//                             <Image
//                                 source=
//                                 {require('../Images/Starbucks.png')}
//                                 style={styles.ImageIconStyle}
//                             />
//                             <View style={styles.TextContainer}>
//                                 <Text style={styles.TextStyle}>Starbucks Points </Text>
//                                 <Text style={{ fontSize: 11, paddingBottom: 6 }}>Get 25 stars in your Starbucks Rewards Card.</Text>
//                                 <Text style={{ fontSize: 8, fontWeight: '700' }}>* Terms and Conditions Applied </Text>
//                             </View>
//                             <View style={styles.SeparatorLine} />

//                             <View style={styles.PointsContainer}>
//                                 <Text style={styles.PointTextStyle}> {starbacks} </Text>
//                                 <TouchableOpacity style={[styles.PointStyle, { opacity: this.state.points > starbacks ? 1 : 0.2 }]} activeOpacity={0.5}>
//                                     <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}> Redeem </Text>
//                                 </TouchableOpacity>
//                             </View>

//                         </View>


//                         <View style={styles.ButtonStyle}>
//                             <Image
//                                 source=
//                                 {require('../Images/Lyft.png')}
//                                 style={styles.ImageIconStyle}
//                             />
//                             <View style={styles.TextContainer}>
//                                 <Text style={styles.TextStyle}>Discount Ride </Text>
//                                 <Text style={{ fontSize: 11, paddingBottom: 6 }}>Get 50% off on your next ride with Lyft.</Text>
//                                 <Text style={{ fontSize: 8, fontWeight: '700' }}>* Terms and Conditions Applied </Text>
//                             </View>
//                             <View style={styles.SeparatorLine} />

//                             <View style={styles.PointsContainer}>
//                                 <Text style={styles.PointTextStyle}> {lyft} </Text>
//                                 <TouchableOpacity style={[styles.PointStyle, { opacity: this.state.points > lyft ? 1 : 0.2 }]} activeOpacity={0.5}>
//                                     <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}> Redeem </Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>


//                         <View style={styles.ButtonStyle}>
//                             <Image
//                                 source=
//                                 {require('../Images/Netflix.png')}
//                                 style={styles.ImageIconStyle}
//                             />
//                             <View style={styles.TextContainer}>
//                                 <Text style={styles.TextStyle}>One Month Free </Text>
//                                 <Text style={{ fontSize: 11, paddingBottom: 6 }}>Stream Netflix for free for one month.</Text>
//                                 <Text style={{ fontSize: 8, fontWeight: '700' }}>* Terms and Conditions Applied </Text>
//                             </View>
//                             <View style={styles.SeparatorLine} />

//                             <View style={styles.PointsContainer}>
//                                 <Text style={styles.PointTextStyle}> {netflix} </Text>
//                                 <TouchableOpacity style={[styles.PointStyle, { opacity: this.state.points > netflix ? 1 : 0.2 }]} activeOpacity={0.5}>
//                                     <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}> Redeem </Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>


//                         <View style={styles.ButtonStyle}>
//                             <Image
//                                 source=
//                                 {require('../Images/UberEats.png')}
//                                 style={styles.ImageIconStyle}
//                             />
//                             <View style={styles.TextContainer}>
//                                 <Text style={styles.TextStyle}>One Free Delivery </Text>
//                                 <Text style={{ fontSize: 11, paddingBottom: 6 }}>Get free delivery on your next order with Uber Eats.</Text>
//                                 <Text style={{ fontSize: 8, fontWeight: '700' }}>* Terms and Conditions Applied </Text>
//                             </View>
//                             <View style={styles.SeparatorLine} />

//                             <View style={styles.PointsContainer}>
//                                 <Text style={styles.PointTextStyle}> {uberEats} </Text>
//                                 <TouchableOpacity style={[styles.PointStyle, { opacity: this.state.points > uberEats ? 1 : 0.2 }]} activeOpacity={0.5}>
//                                     <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}> Redeem </Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>

//                         <View style={styles.ButtonStyle}>
//                             <Image
//                                 source=
//                                 {require('../Images/Uber.png')}
//                                 style={styles.ImageIconStyle}
//                             />
//                             <View style={styles.TextContainer}>
//                                 <Text style={styles.TextStyle}>Discount Ride </Text>
//                                 <Text style={{ fontSize: 11, paddingBottom: 6 }}>Get 50% off on your next ride with Uber.</Text>
//                                 <Text style={{ fontSize: 8, fontWeight: '700' }}>* Terms and Conditions Applied </Text>
//                             </View>

//                             <View style={styles.PointsContainer}>
//                                 <Text style={styles.PointTextStyle}> {uber} </Text>
//                                 <TouchableOpacity style={[styles.PointStyle, { opacity: this.state.points > uber ? 1 : 0.2 }]} activeOpacity={0.5}>
//                                     <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}> Redeem </Text>
//                                 </TouchableOpacity>
//                             </View>

//                         </View>


//                         <View style={styles.ButtonStyle}>
//                             <Image
//                                 source=
//                                 {require('../Images/Spotify.png')}
//                                 style={styles.ImageIconStyle}
//                             />
//                             <View style={styles.TextContainer}>
//                                 <Text style={styles.TextStyle}>One Month Free </Text>
//                                 <Text style={{ fontSize: 11, paddingBottom: 6 }}>Listen to music with spotify premium for free for a month.</Text>
//                                 <Text style={{ fontSize: 8, fontWeight: '700' }}>* Terms and Conditions Applied </Text>
//                             </View>
//                             <View style={styles.SeparatorLine} />

//                             <View style={styles.PointsContainer}>
//                                 <Text style={styles.PointTextStyle}> {spotify} </Text>
//                                 <TouchableOpacity style={[styles.PointStyle, { opacity: this.state.points > spotify ? 1 : 0.2 }]} activeOpacity={0.5}>
//                                     <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}> spotify </Text>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 </ScrollView>
//             </View>

//         );
//     }
// }
// export default Rewards

// const styles = StyleSheet.create({
//     Container: {
//         backgroundColor: '#fff',
//         flex: 1,
//     },



//     MainContainer: {
//         borderRadius: 20,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F0F0F0',
//     },




//     ButtonStyle: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         alignContent: 'space-between',
//         backgroundColor: '#fff',
//         borderWidth: 0.5,
//         borderColor: '#fff',
//         height: 100,
//         width: 380,
//         borderRadius: 8,
//         margin: 6,
//     },

//     ImageIconStyle: {
//         padding: 10,
//         margin: 5,
//         height: 90,
//         width: 90,
//         resizeMode: 'stretch',
//     },

//     ImageIconStyle2: {
//         margin: 5,
//         height: 90,
//         width: 90,
//         resizeMode: 'stretch',
//         justifyContent: 'center'
//     },


//     TextContainer: {
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         alignContent: 'space-between',
//         width: 160,
//     },


//     TextStyle: {
//         color: '#008080',
//         marginBottom: 4,
//         fontWeight: '700',
//         fontSize: 15,
//         width: 180
//     },




//     PointsContainer: {
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         alignContent: 'space-between',
//         alignItems: 'center',
//         width: 160,
//         borderColor: '#fff',
//         width: 70,
//     },

//     PointStyle: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#008080',
//         borderWidth: 0.5,
//         borderColor: '#008080',
//         height: 25,
//         width: 50,
//         borderRadius: 8,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.8,
//         shadowRadius: 2,
//         marginTop: 10,
//         marginRight: 12,
//     },

//     PointTextStyle: {
//         color: '#008080',
//         fontWeight: '700',
//         fontSize: 13,
//         marginRight: 12,
//     },



//     //Tab design

//     TabContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         alignContent: 'space-around',
//         width: 350,
//         alignSelf: 'center',
    
//     },

//     TabStyle: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         alignSelf: 'center',
//     },

//     TabTextStyle: {
//         color: 'darkslategray',
//         justifyContent: 'center',
//         fontWeight: 'bold',
//         fontSize: 70,
//     },



//     //Separator

//     SeparatorLine: {
//         backgroundColor: '#F0F0F0',
//         width: 3,
//         height: 50,
//     },


// });


import React, { Component, useReducer } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Alert } from 'react-native';


//import AwesomeButton from "react-native-really-awesome-button";

var timHortons = 450;
var starbacks = 700;
var lyft = 1000;
var netflix = 1300;
var uberEats = 1500;
var uber = 1700;
var spotify = 2000;


export class Rewards extends Component {

  constructor() {
    super()
    this.state = {
      points: 1000,
      used_timHortons: false,
      used_starbacks: false,
      used_lyft: false,
      used_netflix: false,
      used_uberEats: false,
      used_uber: false,
      used_spotify: false
    }
  }

  _onPressButton = (data) => {
    if (data > this.state.points) {
      Alert.alert('Sufficient points are not available to redeem this Reward')
    }
    else {

      if (data == timHortons) {
        if (this.state.used_timHortons) {
          Alert.alert('Redeemed', 'This award has been redeem already!')
        }
        else {
          this.setState({ used_timHortons: true })

          var new_points = this.state.points - data
          this.setState({ points: new_points })
        }
      }

      else if (data == starbacks) {
        if (this.state.used_starbacks) {
          Alert.alert('Redeemed', 'This award has been redeem already!')
        }
        else {
          var new_points = this.state.points - data
          this.setState({ points: new_points })
          this.setState({ used_starbacks: true })
        }
      }

      else if (data == lyft) {
        if (this.state.used_netflix) {
          Alert.alert('Redeemed', 'This award has been redeem already!')
        }
        else {

          var new_points = this.state.points - data
          this.setState({ points: new_points })
          this.setState({ used_lyft: true })
        }
      }
      else if (data == netflix) {
        if (this.state.used_netflix) {
          Alert.alert('Redeemed', 'This award has been redeem already!')
        }
        else {

          var new_points = this.state.points - data
          this.setState({ points: new_points })
          this.setState({ used_netflix: true })
        }
      }
      else if (data == uberEats) {
        if (this.state.used_uberEats) {
          Alert.alert('Redeemed', 'This award has been redeem already!')
        }
        else {
          var new_points = this.state.points - data
          this.setState({ points: new_points })
          this.setState({ used_uberEats: true })
        }
      }
      else if (data == uber) {
        if (this.state.used_uber) {
          Alert.alert('Redeemed', 'This award has been redeem already!')
        }
        else {

          var new_points = this.state.points - data
          this.setState({ points: new_points })
          this.setState({ used_uber: true })
        }
      }
      else if (data == spotify) {
        if (this.state.used_spotify) {
          Alert.alert('Redeemed', 'This award has been redeem already!')
        }

        else {
          var new_points = this.state.points - data
          this.setState({ points: new_points })
          this.setState({ used_spotify: true })
        }
      }
    }
  }

  render() {
    return (
      <View style={styles.Container}>
               <Header
                    backgroundColor="teal"
                    centerComponent={{
                        text: 'StayHome',
                        style: { color: '#fff', fontSize: 20 },
                    }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
        <Image
          source=
          {require('../Images/star.png')}
          style={styles.StarIconStyle}
        />


       <View style={styles.TabContainer}>
            <Text style={styles.TabTextStyle, {fontSize: 15, fontWeight: '700', color: '#2F4F4F'}}> Your available reward points: </Text>

            <Text style={styles.TabTextStyle , {fontSize: 18, fontWeight: '700', color: '#2F4F4F'}}> {this.state.points} </Text>
          </View>
        <ScrollView>

          <View style={styles.MainContainer}>



            <View style={styles.ButtonStyle}>
              <Image
                source=
                {require('../Images/TimHortons.png')}
                style={styles.ImageIconStyle}
              />
              <View style={styles.TextContainer}>
                <Text style={styles.TextStyle}>Tim Hortons Points </Text>
                <Text style={{ fontSize: 11, paddingBottom: 6 }}>Get a free coffee at your next visit to Time Hortons.</Text>
                <Text style={{ fontSize: 8, fontWeight: '700' }}>* Terms and Conditions Applied </Text>
              </View>
              <View style={styles.SeparatorLine} />

              <View style={styles.PointsContainer}>
                <Text style={styles.PointTextStyle}> {timHortons} </Text>
                <TouchableOpacity onPress={() => this._onPressButton(timHortons)} style={[styles.PointStyle, { opacity: this.state.points >= timHortons && !(this.state.used_timHortons) ? 1 : 0.2 }]} activeOpacity={0.5}>
                  <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}> Redeem </Text>
                </TouchableOpacity>
              </View>
            </View>


            <View style={styles.ButtonStyle}>
              <Image
                source=
                {require('../Images/Starbucks.png')}
                style={styles.ImageIconStyle}
              />
              <View style={styles.TextContainer}>
                <Text style={styles.TextStyle}>Starbucks Points </Text>
                <Text style={{ fontSize: 11, paddingBottom: 6 }}>Get 25 stars in your Starbucks Rewards Card.</Text>
                <Text style={{ fontSize: 8, fontWeight: '700' }}>* Terms and Conditions Applied </Text>
              </View>
              <View style={styles.SeparatorLine} />

              <View style={styles.PointsContainer}>
                <Text style={styles.PointTextStyle}> {starbacks} </Text>
                <TouchableOpacity onPress={() => this._onPressButton(starbacks)} style={[styles.PointStyle, { opacity: this.state.points >= starbacks && !(this.state.used_starbacks) ? 1 : 0.2 }]} activeOpacity={0.5}>
                  <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}> Redeem </Text>
                </TouchableOpacity>
              </View>

            </View>


            <View style={styles.ButtonStyle}>
              <Image
                source=
                {require('../Images/Lyft.png')}
                style={styles.ImageIconStyle}
              />
              <View style={styles.TextContainer}>
                <Text style={styles.TextStyle}>Discount Ride </Text>
                <Text style={{ fontSize: 11, paddingBottom: 6 }}>Get 50% off on your next ride with Lyft.</Text>
                <Text style={{ fontSize: 8, fontWeight: '700' }}>* Terms and Conditions Applied </Text>
              </View>
              <View style={styles.SeparatorLine} />

              <View style={styles.PointsContainer}>
                <Text style={styles.PointTextStyle}> {lyft} </Text>
                <TouchableOpacity onPress={() => this._onPressButton(lyft)} style={[styles.PointStyle, { opacity: this.state.points >= lyft && !(this.state.used_lyft) ? 1 : 0.2 }]} activeOpacity={0.5}>
                  <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}> Redeem </Text>
                </TouchableOpacity>
              </View>
            </View>


            <View style={styles.ButtonStyle}>
              <Image
                source=
                {require('../Images/Netflix.png')}
                style={styles.ImageIconStyle}
              />
              <View style={styles.TextContainer}>
                <Text style={styles.TextStyle}>One Month Free </Text>
                <Text style={{ fontSize: 11, paddingBottom: 6 }}>Stream Netflix for free for one month.</Text>
                <Text style={{ fontSize: 8, fontWeight: '700' }}>* Terms and Conditions Applied </Text>
              </View>
              <View style={styles.SeparatorLine} />

              <View style={styles.PointsContainer}>
                <Text style={styles.PointTextStyle}> {netflix} </Text>
                <TouchableOpacity onPress={() => this._onPressButton(netflix)} style={[styles.PointStyle, { opacity: this.state.points >= netflix && !(this.state.used_netflix) ? 1 : 0.2 }]} activeOpacity={0.5}>
                  <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}> Redeem </Text>
                </TouchableOpacity>
              </View>
            </View>


            <View style={styles.ButtonStyle}>
              <Image
                source=
                {require('../Images/UberEats.png')}
                style={styles.ImageIconStyle}
              />
              <View style={styles.TextContainer}>
                <Text style={styles.TextStyle}>One Free Delivery </Text>
                <Text style={{ fontSize: 11, paddingBottom: 6 }}>Get free delivery on your next order with Uber Eats.</Text>
                <Text style={{ fontSize: 8, fontWeight: '700' }}>* Terms and Conditions Applied </Text>
              </View>
              <View style={styles.SeparatorLine} />

              <View style={styles.PointsContainer}>
                <Text style={styles.PointTextStyle}> {uberEats} </Text>
                <TouchableOpacity onPress={() => this._onPressButton(uberEats)} style={[styles.PointStyle, { opacity: this.state.points >= uberEats && !(this.state.used_uberEats) ? 1 : 0.2 }]} activeOpacity={0.5}>
                  <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}> Redeem </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.ButtonStyle}>
              <Image
                source=
                {require('../Images/Uber.png')}
                style={styles.ImageIconStyle}
              />
              <View style={styles.TextContainer}>
                <Text style={styles.TextStyle}>Discount Ride </Text>
                <Text style={{ fontSize: 11, paddingBottom: 6 }}>Get 50% off on your next ride with Uber.</Text>
                <Text style={{ fontSize: 8, fontWeight: '700' }}>* Terms and Conditions Applied </Text>
              </View>

              <View style={styles.PointsContainer}>
                <Text style={styles.PointTextStyle}> {uber} </Text>
                <TouchableOpacity onPress={() => this._onPressButton(uber)} style={[styles.PointStyle, { opacity: this.state.points >= uber && !(this.state.used_uber) ? 1 : 0.2 }]} activeOpacity={0.5}>
                  <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}> Redeem </Text>
                </TouchableOpacity>
              </View>

            </View>


            <View style={styles.ButtonStyle}>
              <Image
                source=
                {require('../Images/Spotify.png')}
                style={styles.ImageIconStyle}
              />
              <View style={styles.TextContainer}>
                <Text style={styles.TextStyle}>One Month Free </Text>
                <Text style={{ fontSize: 11, paddingBottom: 6 }}>Listen to music with spotify premium for free for a month.</Text>
                <Text style={{ fontSize: 8, fontWeight: '700' }}>* Terms and Conditions Applied </Text>
              </View>
              <View style={styles.SeparatorLine} />

              <View style={styles.PointsContainer}>
                <Text style={styles.PointTextStyle}> {spotify} </Text>
                <TouchableOpacity onPress={() => this._onPressButton(spotify)} style={[styles.PointStyle, { opacity: this.state.points >= spotify && !(this.state.used_spotify) ? 1 : 0.2 }]} activeOpacity={0.5}>
                  <Text style={{ fontSize: 10, fontWeight: '700', color: '#fff' }}> spotify </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

    );
  }
}
export default Rewards

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 0
  },



  MainContainer: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },




  ButtonStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-between',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    width: 380,
    borderRadius: 15,
    margin: 6,
    marginTop: 10
  },

  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 90,
    width: 90,
    resizeMode: 'stretch',
  },

  StarIconStyle: {
    height: 60,
    width: 60,
    marginTop: 10
  },


  TextContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    width: 160,
  },


  TextStyle: {
    color: '#008080',
    marginBottom: 4,
    fontWeight: '700',
    fontSize: 15,
    width: 180
  },




  PointsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'center',
    width: 160,
    borderColor: '#fff',
    width: 70,
  },

  PointStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008080',
    borderWidth: 0.5,
    borderColor: '#008080',
    height: 25,
    width: 50,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 10,
    marginRight: 12,
  },

  PointTextStyle: {
    color: '#008080',
    fontWeight: '700',
    fontSize: 13,
    marginRight: 12,
  },



  //Tab design

  TabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-between',
    width: 350,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 80,
    paddingLeft: 40,
  },

  TabStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },

  TabTextStyle: {
    color: '#2F4F4F',
    fontWeight: '700',
    fontSize: 20,	
  },



  //Separator

  SeparatorLine: {
    backgroundColor: '#F0F0F0',
    width: 3,
    height: 50,
  },


});
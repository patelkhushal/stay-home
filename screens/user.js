import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Header, Card, SocialIcon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import { List, ListItem } from 'react-native-elements'
const user_list = [
    {
        title: 'Email',
        icon: 'email'
    },
    {
        title: 'Username',
        icon: 'person'
    },
    {
        title: 'Password',
        icon: 'lock'
    },
    {
        title: 'Your Rewards',
        icon: 'star'
    },
    
    {
        title: 'Rewards History',
        icon: 'history'
    },
]

const app_list = [
    {
        title: 'Location Settings',
        icon: 'settings'
    },

    {
        title: 'Notification Settings',
        icon: 'settings'
    },

    {
        title: 'Dark Mode',
        icon: 'settings'
    },
]

const Social = [
    {
        title: 'Refer a Friend',
        icon: 'people'
    },
    
]

export default class user extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    backgroundColor="teal"
                    centerComponent={{
                        text: 'StayHome',
                        style: { color: '#fff', fontSize: 20 },
                    }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />

                <View style={styles.header}>
                    <View style={styles.headerContent}>
                        <Image
                            style={styles.avatar}
                            source={{
                                uri: 'https://bootdey.com/img/Content/avatar/avatar7.png',
                            }}
                        />
                        <Text style={styles.name}>John Doe</Text>
                        <Text
                            style={{
                                fontSize: 16,
                                color: 'cadetblue',
                                fontWeight: '600',
                                paddingRight: 6,
                                paddingTop: 2,
                            }}>
                            <Icon2 name="location-pin" color={'teal'} size={20} />
                        Toronto{' '}
                        </Text>
                    </View>
                </View>
                
                <View style={styles.infoContainer}>
                    <ScrollView>
                    <Text style={{fontWeight: '700',color: 'gray' }}>Account Settings</Text>
                    {
                        user_list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{ name: item.icon }}
                                bottomDivider
                                chevron
                            />
                        ))
                    }
                    <Text style={{fontWeight: '700',color: 'gray' }}></Text>
                    <Text style={{fontWeight: '700',color: 'gray' }}>App Settings</Text>
                    {
                        app_list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{ name: item.icon }}
                                bottomDivider
                                chevron
                            />
                        ))
                    }
                    <Text style={{fontWeight: '700',color: 'gray' }}></Text>
                    <Text style={{fontWeight: '700',color: 'gray' }}>Social</Text>
                    {
                        Social.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{ name: item.icon }}
                                bottomDivider
                                chevron
                            />
                        ))
                    }

                    <SocialIcon
                        title='Link account with Facebook'
                        button
                        type='facebook'
                    />

                    <SocialIcon
                        title='Link account with Google'
                        button
                        type='google'
                    />

                    </ScrollView>
                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1.
    },
    infoContainer: {
        backgroundColor: 'white',
        flex: 3,
    },
      header: {
        backgroundColor: 'white',
    },
    headerContent: {
        padding: 30,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 88,
        borderWidth: 3,
        borderColor: 'teal',
        marginBottom: 10,
    },
    name: {
        fontSize: 25,
        color: 'teal',
        fontWeight: 'bold',
    },
    userInfo: {
        fontSize: 16,
        color: 'cadetblue',
        fontWeight: '600',
    },
    body: {
        backgroundColor: '#778899',
        height: 500,
        alignItems: 'center',
    },
    item: {
        flexDirection: 'row',
    },
    infoContent: {
        flex: 1,
        alignItems: 'flex-start',
        paddingLeft: 5,
    },
    iconContent: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 5,
    },
    icon: {
        width: 30,
        height: 30,
        marginTop: 20,
    },
    info: {
        fontSize: 18,
        marginTop: 20,
        color: '#FFFFFF',
    },
});
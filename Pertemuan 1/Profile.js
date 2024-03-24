import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const Profile = () => {
    return (
        <View>
            <image source={require("../assets/profile.png")}/>
            <Text>My Profile</Text>
            <Text>Name      : Sandry Chandra Putra</Text>
            <Text>Class     : TI22PA</Text>
            <Text>NPM       : 222310065</Text>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Profile;

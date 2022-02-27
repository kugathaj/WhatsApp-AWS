import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Users from '../../assets/data/Users';
import { Message } from '../../types';

const NewMessageFloatingButton = () => {

    const navigation = useNavigation();
    const onPressNewMessage = () => {
        navigation.navigate("Contacts");
    }

    return (
        <View style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: "#0c6157",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: 30,
            right: 15

        }}>
            <TouchableOpacity onPress={onPressNewMessage}>
                <MaterialCommunityIcons name="message-reply-text" color={"white"} size={28} />
            </TouchableOpacity>
        </View>
    )
}

export default NewMessageFloatingButton;
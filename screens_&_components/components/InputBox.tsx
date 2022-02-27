import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';

import Users from '../../assets/data/Users';
import { Message } from '../../types';


const InputBox = () => {

    const [message, setMessage] = useState('');

    const onMicrophonePress = () => {
        console.warn("onMicrophonePress")
    }

    const onSendMessagePress = () => {
        console.warn(`sending: ${message}`)

        //SEND THE MESSAGE TO THE BACKEND
        setMessage('')
    }

    const onPress = () => {
        if (!message) {
            onMicrophonePress()
        }
        else {
            onSendMessagePress()
        }
    }

    return (
        <View style={{ flexDirection: "row", margin: 10, borderRadius: 25, alignItems: "flex-end" }}>
            <View style={styles.container}>
                <FontAwesome5 name="laugh-beam" color={"grey"} size={22} />

                <TextInput
                    value={message}
                    onChangeText={setMessage}
                    placeholder='Type a message'
                    style={styles.inputBox}
                    multiline
                />

                <Entypo name="attachment" color={"grey"} size={22} style={styles.icon} />

                {!message && <Fontisto name="camera" color={"grey"} size={22} />}
            </View>

            {/* RECORD ICON */}
            <View style={styles.button}>
                <TouchableOpacity onPress={onPress}>
                    {
                        !message ? <MaterialCommunityIcons name="microphone" color={"white"} size={28} />

                            :

                            <MaterialCommunityIcons name="send" color={"white"} size={24} />
                    }
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
        borderRadius: 20,
        marginRight: 10,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    inputBox: {
        flex: 1,
        marginHorizontal: 10

    },

    button: {
        backgroundColor: "#0c6157",
        borderRadius: 25,
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",

    },

    icon: {
        marginHorizontal: 5
    }
})

export default InputBox;




































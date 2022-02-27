import moment from 'moment';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Users from '../../assets/data/Users';
import { Message } from '../../types';


export type ChatMessageProps = {
    message: Message;
}

const ChatMessage = (props: ChatMessageProps) => {
    const { message } = props;

    const isMyMessage = () => {
        return message.user.id === 'u1';
    }
    return (
        <View style={styles.container}>
            <View style={[
                styles.messageBox, {
                    backgroundColor: isMyMessage() ? "#DCF8C5" : "#e5e5e5",
                    marginLeft: isMyMessage() ? 50 : 0,
                    marginRight: isMyMessage() ? 0 : 50,
                }
            ]}>
                <View style={{}}>
                    {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                    <Text style={styles.content}>{message.content}</Text>
                    <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
                </View>
            </View>



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    },

    messageBox: {
        borderRadius: 5,
        padding: 10
    },

    name: {
        color: "#567558",
        fontWeight: "bold",
        marginBottom: 4
    },

    content: {

    },

    time: {
        alignSelf: "flex-end",
        color: "grey"
    },

})
export default ChatMessage;
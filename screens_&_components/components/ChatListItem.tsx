import moment from 'moment';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Users from '../../assets/data/Users';
import { ChatRoom } from '../../types';

export type ChatListItemProps = {
    chatRoom: ChatRoom;
}


const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    const user = chatRoom.users[1];

    const navigation = useNavigation();
    const onClick = () => {
        navigation.navigate("ChatRoomScreen", { id: chatRoom.id, name: user.name, image: user.imageUri })
    }
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={{ flexDirection: "row" }}>
                    <Image
                        source={{ uri: user.imageUri }}
                        style={{ width: 60, height: 60, borderRadius: 50 }}
                    />
                    <View style={{ marginLeft: 15, marginTop: 10 }}>
                        <Text style={styles.userName}>{user.name}</Text>
                        <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>
                <Text style={styles.yesterday}>{moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 5, width: "100%",
        justifyContent: "space-between"
    },
    userName: {
        fontSize: 16,
        fontWeight: '500',
    },

    lastMessage: {
        fontSize: 15,
        fontWeight: '200',
        color: "#2C2828"
    },

    yesterday: {
        fontSize: 15,
        fontWeight: '200',
        color: "#2C2828",
        marginTop: 10,
        marginVertical: 35
    },

})

export default ChatListItem;
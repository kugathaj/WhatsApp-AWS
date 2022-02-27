import moment from 'moment';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Users from '../../assets/data/Users';
import { ChatRoom } from '../../types';
import ChatMessage from './ChatMessage';
import chatRoomData from '../../assets/data/Chats';
import BG from '../images/BG.png';
import InputBox from './InputBox';

const ChatRoomScreen = () => {
    const route = useRoute();
    return (
        <ImageBackground
            source={BG}
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />

            <InputBox />
        </ImageBackground>

    )
}

export default ChatRoomScreen;
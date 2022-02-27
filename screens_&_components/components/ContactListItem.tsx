import moment from 'moment';
import React from 'react';
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Users from '../../assets/data/Users';
import { User } from '../../types';

export type ContactListItemProps = {
    user: User;
}


const ContactListItem = (props: ContactListItemProps) => {
    const { user } = props;

    const navigation = useNavigation();
    const onClick = () => {
        //NAVIGATE TO CHATROOM
        navigation.navigate("ChatRoomScreen", { id: user.id, name: user.name, image: user.imageUri })
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
                        <Text style={styles.status}>{user.status}</Text>
                    </View>
                </View>
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

    status: {
        fontSize: 15,
        fontWeight: '200',
        color: "#2C2828"
    },

})

export default ContactListItem;
import { Text, View } from '../../components/Themed';
import ChatListItem from '../components/ChatListItem'
import ContactListItem from '../components/ContactListItem';

import users from '../../assets/data/Users';
import ChatRoom from '../components/ChatRoom';
import { FlatList } from 'react-native';

import NewMessageFloatingButton from '../components/NewMessageFloatingButton';

export default function ContactScreen() {
    return (
        <View style={{ flex: 1 }}>
            {/* <ChatListItem chatRoom={ChatRooms[0]} /> */}

            <FlatList
                data={users}
                renderItem={({ item }) => <ContactListItem user={item} />}
                keyExtractor={(item) => item.id}
                style={{ width: "100%" }}
            />
        </View>
    );
}
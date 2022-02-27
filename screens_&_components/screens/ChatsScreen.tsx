import { Text, View } from '../../components/Themed';
import ChatListItem from '../components/ChatListItem'

import chatRooms from '../../assets/data/ChatRooms';
import ChatRoom from '../components/ChatRoom';
import { FlatList } from 'react-native';

import NewMessageFloatingButton from '../components/NewMessageFloatingButton';

export default function ChatsScreen() {
  return (
    <View style={{ flex: 1 }}>
      {/* <ChatListItem chatRoom={ChatRooms[0]} /> */}

      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatListItem chatRoom={item} />}
        keyExtractor={(item) => item.id}
        style={{ width: "100%" }}
      />

      <NewMessageFloatingButton />
    </View>
  );
}
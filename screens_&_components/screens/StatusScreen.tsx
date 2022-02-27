import { Text, View } from '../../components/Themed';
//import Amplify, { Auth, API, graphqlOperation } from 'aws-amplify';
import { TouchableOpacity } from 'react-native';

export default function StatusScreen() {

  // const onPressLogout = () => {

  //   Auth.signOut();

  // }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>STATUS SCREEN</Text>
      <TouchableOpacity onPress={() => { }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>logout</Text>
      </TouchableOpacity>
    </View>
  );
}


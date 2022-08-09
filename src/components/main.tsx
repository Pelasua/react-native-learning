import {StyleSheet, Text, View,} from 'react-native';
import Constants from 'expo-constants';
import BookList from './bookList'

type Props = {
}

export default (props: Props) => {
  return (
    <View style={{
        marginTop: Constants.statusBarHeight,
        flexGrow: 1
    }}>
        <BookList></BookList>
    </View>
  );
}

import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import StatusBar from '../../../components/StatusBar';
import ScreenHeader from '../../../components/ScreenHeader';
import UserComponent from '../../../components/UserComponent';

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ScreenHeader title="Chats" showMusicIcon />

      <Link href="/chat" asChild>
        <UserComponent
          image="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg"
          name="Joon Park"
          subtitle="Hey! Raphy, wanna grab a beer?"
          size="lg"
          count={1}
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
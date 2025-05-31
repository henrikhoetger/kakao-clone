import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Info, ChevronRight } from 'lucide-react-native';
import StatusBar from '../../../components/StatusBar';
import ScreenHeader from '../../../components/ScreenHeader';
import UserComponent from '../../../components/UserComponent';

export default function FriendsScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ScreenHeader title="Friends" showMusicIcon showUserPlusIcon />
      
      <TouchableOpacity style={styles.displayLink}>
        <Info size={16} color="rgba(0, 0, 0, 0.3)" />
        <Text style={styles.displayText}>Friends' Names Display</Text>
        <ChevronRight size={16} color="rgba(0, 0, 0, 0.3)" />
      </TouchableOpacity>

      <View style={styles.content}>
        <UserComponent
          image="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg"
          name="Raphael"
          subtitle="go farther than go higher"
          size="lg"
        />

        <View style={styles.channelSection}>
          <View style={styles.channelHeader}>
            <Text style={styles.channelTitle}>Channel</Text>
            <ChevronRight size={16} color="rgba(0, 0, 0, 0.3)" />
          </View>
          
          <UserComponent
            image="https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg"
            name="Channel"
            size="sm"
            showChevron
            count={2}
          />
        </View>

        <View style={styles.channelSection}>
          <View style={styles.channelHeader}>
            <Text style={styles.channelTitle}>Friends 1</Text>
            <ChevronRight size={16} color="rgba(0, 0, 0, 0.3)" />
          </View>
          
          <UserComponent
            image="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg"
            name="Joon Park"
            size="sm"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  displayLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafafa',
    paddingVertical: 10,
    marginTop: -10,
    marginBottom: 10,
  },
  displayText: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#2e363e',
    marginHorizontal: 10,
  },
  content: {
    flex: 1,
  },
  channelSection: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
    paddingTop: 15,
  },
  channelHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  channelTitle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
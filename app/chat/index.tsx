import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft, Search, Menu, PlusSquare, Smile, ArrowUp } from 'lucide-react-native';
import StatusBar from '../../components/StatusBar';
import UserComponent from '../../components/UserComponent';

export default function ChatScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={24} color="#2e363e" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Joon Park</Text>
        <View style={styles.headerIcons}>
          <Search size={20} color="#2e363e" style={styles.headerIcon} />
          <Menu size={20} color="#2e363e" />
        </View>
      </View>

      <View style={styles.chat}>
        <View style={styles.timestamp}>
          <Text style={styles.timestampText}>Friday, Sep 18, 2020</Text>
        </View>

        <View style={styles.message}>
          <UserComponent
            image="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg"
            name="Joon Park"
            subtitle="Hey! Raphy, wanna grab a beer?"
            size="sm"
          />
          <Text style={styles.messageTime}>21:29</Text>
        </View>

        <View style={styles.messageOwn}>
          <View style={styles.messageOwnContent}>
            <Text style={styles.messageOwnText}>Sure! Where ru now?</Text>
            <Text style={styles.messageTime}>21:32</Text>
          </View>
        </View>
      </View>

      <View style={styles.reply}>
        <TouchableOpacity style={styles.replyButton}>
          <PlusSquare size={24} color="rgba(0, 0, 0, 0.5)" />
        </TouchableOpacity>
        <View style={styles.replyInput}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            placeholderTextColor="rgba(0, 0, 0, 0.4)"
          />
          <TouchableOpacity style={styles.emojiButton}>
            <Smile size={24} color="rgba(0, 0, 0, 0.5)" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendButton}>
            <ArrowUp size={20} color="#2e363e" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a0b9c9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    color: '#2e363e',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    marginRight: 15,
  },
  chat: {
    flex: 1,
    padding: 20,
  },
  timestamp: {
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginBottom: 30,
  },
  timestampText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
  },
  message: {
    marginBottom: 20,
  },
  messageTime: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 5,
    fontFamily: 'OpenSans-Regular',
  },
  messageOwn: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  messageOwnContent: {
    alignItems: 'flex-end',
  },
  messageOwnText: {
    backgroundColor: '#fae100',
    padding: 10,
    borderRadius: 12,
    borderTopRightRadius: 0,
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  reply: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  replyButton: {
    padding: 10,
  },
  replyInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
  },
  emojiButton: {
    position: 'absolute',
    right: 50,
  },
  sendButton: {
    width: 30,
    height: 30,
    backgroundColor: '#fae100',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
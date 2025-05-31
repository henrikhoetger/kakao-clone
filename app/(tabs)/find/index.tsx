import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { QrCode, Book as AddressBook, Fingerprint, Mail, ChevronRight, Heart } from 'lucide-react-native';
import StatusBar from '../../../components/StatusBar';
import ScreenHeader from '../../../components/ScreenHeader';

export default function FindScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ScreenHeader title="Find" />

      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconItem}>
          <QrCode size={32} color="#2e363e" />
          <Text style={styles.iconText}>QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconItem}>
          <AddressBook size={32} color="#2e363e" />
          <Text style={styles.iconText}>Add by Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconItem}>
          <Fingerprint size={32} color="#2e363e" />
          <Text style={styles.iconText}>Add by ID</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconItem}>
          <Mail size={32} color="#2e363e" />
          <Text style={styles.iconText}>Invite</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recommendedFriends}>
        <Text style={styles.sectionTitle}>Recommended Friends</Text>
        <Text style={styles.noFriends}>You have no recommended friends.</Text>
      </View>

      <View style={styles.openChat}>
        <View style={styles.openChatHeader}>
          <Text style={styles.sectionTitle}>Open Chat</Text>
          <TouchableOpacity style={styles.headerLink}>
            <Text style={styles.headerLinkText}>Go to Openchat Home</Text>
            <ChevronRight size={16} color="rgba(0, 0, 0, 0.3)" />
          </TouchableOpacity>
        </View>

        <View style={styles.openPost}>
          <View style={styles.postInfo}>
            <Text style={styles.postTitle}>#BTS</Text>
            <Text style={styles.postHashtags}>#bts#army#friends</Text>
            <View style={styles.memberInfo}>
              <Image
                source={{ uri: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg" }}
                style={styles.memberImage}
              />
              <Text style={styles.memberCount}>8200 members</Text>
              <View style={styles.divider} />
              <Text style={styles.activeStatus}>Active</Text>
            </View>
          </View>
          <View style={styles.postImage}>
            <Image
              source={{ uri: "https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg" }}
              style={styles.coverImage}
            />
            <View style={styles.heartCount}>
              <Heart size={12} color="#fff" />
              <Text style={styles.heartCountText}>999</Text>
            </View>
          </View>
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
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  iconItem: {
    alignItems: 'center',
  },
  iconText: {
    marginTop: 8,
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: '#2e363e',
  },
  recommendedFriends: {
    padding: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: 'OpenSans-SemiBold',
    color: 'rgba(0, 0, 0, 0.5)',
    marginBottom: 10,
  },
  noFriends: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: '#2e363e',
    textAlign: 'center',
    marginTop: 20,
  },
  openChat: {
    padding: 20,
  },
  openChatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLinkText: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: 'rgba(0, 0, 0, 0.5)',
    marginRight: 5,
  },
  openPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    paddingBottom: 20,
  },
  postInfo: {
    flex: 1,
  },
  postTitle: {
    fontSize: 16,
    fontFamily: 'OpenSans-SemiBold',
    color: '#2e363e',
    marginBottom: 5,
  },
  postHashtags: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: 'rgba(0, 0, 0, 0.5)',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  memberInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
  memberCount: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: 'rgba(0, 0, 0, 0.5)',
  },
  divider: {
    width: 1,
    height: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginHorizontal: 5,
  },
  activeStatus: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: '#f8b6e3',
  },
  postImage: {
    position: 'relative',
  },
  coverImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  heartCount: {
    position: 'absolute',
    bottom: 8,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  heartCountText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 3,
    fontFamily: 'OpenSans-Regular',
  },
});
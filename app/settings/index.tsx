import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { ChevronLeft, Search, Volume2, FlaskRound as Flask, GitBranch, Lock, Bell, Loader, Palette, MoreHorizontal, HelpCircle } from 'lucide-react-native';
import StatusBar from '../../components/StatusBar';

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar />
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <ChevronLeft size={24} color="#2e363e" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <Search size={20} color="#2e363e" />
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <TouchableOpacity style={styles.setting}>
            <View style={styles.settingLeft}>
              <Volume2 size={20} color="#2e363e" style={styles.settingIcon} />
              <Text style={styles.settingText}>Notices</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.setting}>
            <View style={styles.settingLeft}>
              <Flask size={20} color="#2e363e" style={styles.settingIcon} />
              <Text style={styles.settingText}>Kokoa Lab</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.setting}>
            <View style={styles.settingLeft}>
              <GitBranch size={20} color="#2e363e" style={styles.settingIcon} />
              <Text style={styles.settingText}>Version</Text>
            </View>
            <Text style={styles.settingValue}>Latest Version</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.setting}>
            <View style={styles.settingLeft}>
              <Lock size={20} color="#2e363e" style={styles.settingIcon} />
              <Text style={styles.settingText}>Privacy</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.setting}>
            <View style={styles.settingLeft}>
              <Bell size={20} color="#2e363e" style={styles.settingIcon} />
              <Text style={styles.settingText}>Notifications</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.setting}>
            <View style={styles.settingLeft}>
              <Loader size={20} color="#2e363e" style={styles.settingIcon} />
              <Text style={styles.settingText}>Display</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.setting}>
            <View style={styles.settingLeft}>
              <Palette size={20} color="#2e363e" style={styles.settingIcon} />
              <Text style={styles.settingText}>Themes</Text>
            </View>
            <Text style={styles.settingValue}>Default</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.setting}>
            <View style={styles.settingLeft}>
              <MoreHorizontal size={20} color="#2e363e" style={styles.settingIcon} />
              <Text style={styles.settingText}>Advanced Features</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.setting}>
            <View style={styles.settingLeft}>
              <HelpCircle size={20} color="#2e363e" style={styles.settingIcon} />
              <Text style={styles.settingText}>Support</Text>
            </View>
          </TouchableOpacity>
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
  content: {
    flex: 1,
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    marginBottom: 20,
  },
  setting: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingIcon: {
    marginRight: 15,
  },
  settingText: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#2e363e',
  },
  settingValue: {
    fontSize: 14,
    fontFamily: 'OpenSans-Regular',
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Search, UserPlus, Music, Settings } from 'lucide-react-native';
import { Link } from 'expo-router';

type ScreenHeaderProps = {
  title: string;
  showMusicIcon?: boolean;
  showUserPlusIcon?: boolean;
};

export default function ScreenHeader({ title, showMusicIcon = false, showUserPlusIcon = false }: ScreenHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.icon}>
          <Search size={20} color="#2e363e" />
        </TouchableOpacity>
        {showUserPlusIcon && (
          <TouchableOpacity style={styles.icon}>
            <UserPlus size={20} color="#2e363e" />
          </TouchableOpacity>
        )}
        {showMusicIcon && (
          <TouchableOpacity style={styles.icon}>
            <Music size={20} color="#2e363e" />
          </TouchableOpacity>
        )}
        <Link href="/settings" asChild>
          <TouchableOpacity style={styles.icon}>
            <Settings size={20} color="#2e363e" />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 20,
    color: '#2e363e',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
});
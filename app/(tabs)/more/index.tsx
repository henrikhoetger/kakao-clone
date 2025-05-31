import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { CalendarCheck, Archive, Smile, Brush, Box, MessageSquare, Info } from 'lucide-react-native';
import StatusBar from '../../../components/StatusBar';
import ScreenHeader from '../../../components/ScreenHeader';
import UserComponent from '../../../components/UserComponent';

export default function MoreScreen() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <ScreenHeader title="More" showMusicIcon />

      <UserComponent
        image="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg"
        name="Raphael"
        subtitle="+82 10-1234-5678"
        size="lg"
      />

      <View style={styles.iconGrid}>
        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconItem}>
            <CalendarCheck size={32} color="#2e363e" />
            <Text style={styles.iconText}>Calendar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <Archive size={32} color="#2e363e" />
            <Text style={styles.iconText}>Talk Drive</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <Smile size={32} color="#2e363e" />
            <Text style={styles.iconText}>Emoticons</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <Brush size={32} color="#2e363e" />
            <Text style={styles.iconText}>Themes</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.iconRow, styles.secondRow]}>
          <TouchableOpacity style={styles.iconItem}>
            <Box size={32} color="#2e363e" />
            <Text style={styles.iconText}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconItem}>
            <MessageSquare size={32} color="#2e363e" />
            <Text style={styles.iconText}>Openchat</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.suggestions}>
        <Text style={styles.suggestionsTitle}>Suggestions</Text>
        <View style={styles.suggestionsGrid}>
          <TouchableOpacity style={styles.suggestionItem}>
            <View style={styles.suggestionIcon}>
              <Info size={32} color="#fff" />
            </View>
            <Text style={styles.suggestionText}>Kokoa Story</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.suggestionItem}>
            <View style={styles.suggestionIcon}>
              <Info size={32} color="#fff" />
            </View>
            <Text style={styles.suggestionText}>Kokoa Story</Text>
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
  iconGrid: {
    padding: 20,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  secondRow: {
    justifyContent: 'flex-start',
    gap: 60,
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
  suggestions: {
    marginTop: 20,
    padding: 20,
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  suggestionsTitle: {
    fontSize: 14,
    fontFamily: 'OpenSans-SemiBold',
    color: '#2e363e',
    marginBottom: 20,
  },
  suggestionsGrid: {
    flexDirection: 'row',
    gap: 20,
  },
  suggestionItem: {
    alignItems: 'center',
  },
  suggestionIcon: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#fae100',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  suggestionText: {
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
    color: '#2e363e',
  },
});
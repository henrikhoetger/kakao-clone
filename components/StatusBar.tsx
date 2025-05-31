import { View, Text, StyleSheet } from 'react-native';
import { Wifi, Battery, Zap } from 'lucide-react-native';

export default function StatusBar() {
  return (
    <View style={styles.statusBar}>
      <View style={styles.column}>
        <Text style={styles.text}>No Service</Text>
        <Wifi size={14} color="#2e363e" />
      </View>
      <View style={[styles.column, styles.centerColumn]}>
        <Text style={styles.text}>18:43</Text>
      </View>
      <View style={[styles.column, styles.rightColumn]}>
        <Text style={styles.text}>150%</Text>
        <Battery size={14} color="#2e363e" style={styles.icon} />
        <Zap size={14} color="#2e363e" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  column: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerColumn: {
    justifyContent: 'center',
  },
  rightColumn: {
    justifyContent: 'flex-end',
  },
  text: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    marginRight: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
});
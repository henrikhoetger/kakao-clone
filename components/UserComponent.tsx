import { View, Text, Image, StyleSheet } from 'react-native';
import { ChevronRight } from 'lucide-react-native';

type UserComponentProps = {
  image: string;
  name: string;
  subtitle?: string;
  size?: 'lg' | 'sm';
  showChevron?: boolean;
  count?: number;
};

export default function UserComponent({
  image,
  name,
  subtitle,
  size = 'lg',
  showChevron = false,
  count,
}: UserComponentProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Image
          source={{ uri: image }}
          style={[
            styles.avatar,
            size === 'sm' ? styles.avatarSmall : styles.avatarLarge,
          ]}
        />
        <View style={styles.textContainer}>
          <Text style={[
            styles.name,
            size === 'sm' && styles.nameSmall
          ]}>{name}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
      
      {(showChevron || count) && (
        <View style={styles.rightContent}>
          {count && (
            <Text style={styles.count}>{count}</Text>
          )}
          {showChevron && <ChevronRight size={16} color="rgba(0, 0, 0, 0.5)" />}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 20,
    marginRight: 20,
  },
  avatarLarge: {
    width: 60,
    height: 60,
    borderRadius: 25,
  },
  avatarSmall: {
    width: 45,
    height: 45,
    borderRadius: 20,
  },
  textContainer: {
    justifyContent: 'center',
  },
  name: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 16,
    color: '#2e363e',
    marginBottom: 5,
  },
  nameSmall: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
  subtitle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 13,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.5)',
    marginRight: 5,
  },
});
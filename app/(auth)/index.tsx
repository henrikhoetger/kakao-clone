import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to KokoaTalk</Text>
        <Text style={styles.subtitle}>
          If you have a Kokoa Account, log in with your email or phone number.
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email or phone number"
          placeholderTextColor="rgba(0, 0, 0, 0.4)"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(0, 0, 0, 0.4)"
          secureTextEntry
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.link}>
          <Text style={styles.linkText}>Find Kokoa Account or Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 30,
  },
  header: {
    marginTop: 90,
    marginBottom: 90,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 24,
    marginBottom: 20,
    color: '#2e363e',
  },
  subtitle: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.6,
    color: '#2e363e',
    width: '65%',
  },
  form: {
    width: '100%',
  },
  input: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    paddingVertical: 15,
    marginBottom: 25,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
  },
  button: {
    backgroundColor: '#fae100',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontFamily: 'OpenSans-SemiBold',
    color: '#2e363e',
    fontSize: 16,
  },
  link: {
    alignItems: 'center',
  },
  linkText: {
    fontFamily: 'OpenSans-Regular',
    color: '#2e363e',
    fontSize: 14,
  },
});
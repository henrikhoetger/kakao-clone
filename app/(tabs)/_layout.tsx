import { Tabs } from 'expo-router';
import { Users, MessageSquare, Search, MoreHorizontal } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: 'rgba(0, 0, 0, 0.3)',
          paddingTop: 10,
          height: 60,
        },
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#2e363e',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="friends"
        options={{
          title: 'Friends',
          tabBarIcon: ({ color, size }) => <Users size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chats"
        options={{
          title: 'Chats',
          tabBarIcon: ({ color, size }) => <MessageSquare size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="find"
        options={{
          title: 'Find',
          tabBarIcon: ({ color, size }) => <Search size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: 'More',
          tabBarIcon: ({ color, size }) => <MoreHorizontal size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
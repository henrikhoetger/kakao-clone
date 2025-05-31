import io from 'socket.io-client';
import { socketConfig } from './api';
import * as SecureStore from 'expo-secure-store';

let socket: any = null;

export const initializeSocket = async () => {
  const token = await SecureStore.getItemAsync('token');
  
  if (!socket && token) {
    socket = io(socketConfig.url, {
      ...socketConfig.options,
      auth: {
        token,
      },
    });

    socket.on('connect', () => {
      console.log('Socket connected');
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });
  }

  return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
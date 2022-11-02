import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { DARK_MODE_ENABLED } from './src/config/constants';
import theme from './src/config/theme';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  return (
    <>
      <StatusBar style='dark' backgroundColor={theme.colors.background} />
      <RootNavigator />
    </>
  );
}
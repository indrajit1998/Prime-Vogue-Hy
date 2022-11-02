import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabParamList } from '../types';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import theme from '../config/theme';
import { DARK_MODE_ENABLED } from '../config/constants';
import Cateogories from '../screens/Cateogories';
import Cart from '../screens/Cart';
import Service from '../screens/Service';

const Tab = createBottomTabNavigator<BottomTabParamList>();



export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // header: (props) => <Header {...props} />,
                tabBarStyle: styles.tabBar,
                tabBarItemStyle: styles.tabBarItem,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: DARK_MODE_ENABLED ? 'lightgray' : 'gray',
                tabBarIcon: ({ focused, color }) => {
                    const { name: routeName } = route;

                    type IconName = React.ComponentProps<typeof Ionicons>['name'];
                    let iconName: IconName = 'home';
                    if (routeName === 'Cateogories') iconName = 'apps';
                    if (routeName === 'Service') iconName = 'logo-apple-appstore';
                    if (routeName === 'Cart') iconName = 'cart';
                    if (routeName === 'Profile') iconName = 'person-circle';

                    const iconSize = 24;
                    const iconColor = focused ? theme.colors.primary : color;

                    return <Ionicons name={iconName} size={iconSize} color={iconColor} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Cateogories" component={Cateogories} />
            <Tab.Screen name="Service" component={Service} />
            <Tab.Screen name="Cart" component={Cart} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: theme.colors.background,
    },
    tabBarItem: {
        paddingVertical: 5,
    },
});

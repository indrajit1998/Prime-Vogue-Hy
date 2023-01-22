import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import { CONTAINER_OUTER_SPACING } from '../config/constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import theme from '../config/theme';

type Props = React.ComponentProps<typeof View> & {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};

const Container = ({ children, style }: Props) => (
    <KeyboardAwareScrollView
        style={{ flex: 1, backgroundColor: theme.colors.background }}
        contentContainerStyle={[{ flexGrow: 1 }, style]}
        keyboardShouldPersistTaps="handled"
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
    >
        {children}
    </KeyboardAwareScrollView>
);

export default Container;

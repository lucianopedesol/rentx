import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
    Container,
    Title,
} from './styles';

interface IProps {
    title: string;
    color?: string;
    onPress: () => void;
}

export function Button({ title, color, onPress }: IProps) {
    const theme = useTheme();
    return (
        <GestureHandlerRootView>
            <Container onPress={onPress} color={color ? color : theme.colors.main}>
                <Title>{title}</Title>
            </Container>
        </GestureHandlerRootView>
    );
}
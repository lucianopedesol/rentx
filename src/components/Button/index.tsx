import React from 'react';
import { ActivityIndicator } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
    Container,
    Title,
} from './styles';

interface IProps {
    title: string;
    color?: string;
    enabled?: boolean,
    loading?: boolean
    onPress: () => void;
}

export function Button({ title, color, enabled = true, loading = false, onPress }: IProps) {
    const theme = useTheme();
    return (
        <GestureHandlerRootView>
            <Container
                onPress={onPress} color={color ? color : theme.colors.main}
                enabled={enabled}
                style={{ opacity: (enabled === false || loading === true) ? .5 : 1 }}
            >
                {loading ?
                    <ActivityIndicator
                        color={theme.colors.shape}
                    />
                    :
                    <Title>{title}</Title>
                }

            </Container>
        </GestureHandlerRootView>
    );
}
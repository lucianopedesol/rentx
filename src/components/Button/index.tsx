import React from 'react';

import {
    Container,
    Title,
} from './styles';

interface IProps {
    title: string;
    color?: string;
    onPress: () => void;
}

export function Button({ title, color, ...rest }: IProps) {
    return (
        <Container {...rest} color={color}>
            <Title>{title}</Title>
        </Container>
    );
}
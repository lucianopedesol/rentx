import React from 'react';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title
} from './styles';

interface IProps extends RectButtonProps {
  title: string
}

export function ConfirmButtom({ title, ...rest }: IProps) {
  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        <Title>{title}</Title>
      </Container>
    </GestureHandlerRootView>
  );
}
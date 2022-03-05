import React from 'react';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import GasolineSvg from '../../assets/gasoline.svg'
import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';

export interface ICardData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: string;
  };
  thumbnail: string;
}
interface IProps extends RectButtonProps {
  data: ICardData
}

export function Car({ data, ...rest }: IProps) {
  return (
    <GestureHandlerRootView>

      <Container {...rest}>
        <Details>
          <Brand>{data.brand}</Brand>
          <Name>{data.name}</Name>

          <About>
            <Rent>
              <Period>{data.rent.period}</Period>
              <Price>{`R$ ${data.rent.price}`}</Price>
            </Rent>
            <Type>
              <GasolineSvg />
            </Type>
          </About>
        </Details>
        <CarImage
          source={{ uri: data.thumbnail }}
          resizeMode='contain'
        />
      </Container>
    </GestureHandlerRootView>
  );
}
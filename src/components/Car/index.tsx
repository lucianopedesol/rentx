import React from 'react';
import { GestureHandlerRootView, RectButtonProps } from 'react-native-gesture-handler';
import GasolineSvg from '../../assets/gasoline.svg'
import { ICarDTO } from '../../dtos/ICarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
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


interface IProps extends RectButtonProps {
  data: ICarDTO
}

export function Car({ data, ...rest }: IProps) {

  const MotorIcon = getAccessoryIcon(data.fuel_type);
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
              <MotorIcon />
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
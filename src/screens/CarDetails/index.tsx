import React from 'react';
import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import speedSvg from '../../assets/speed.svg';
import accelarationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from './styles';
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ICarDTO } from '../../dtos/ICarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';


interface IParams {
  car: ICarDTO, 
}

export function CarDetails() {

  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as IParams;

  function handleConfirmRental() {
    navigation.navigate('Scheduling', {car});

  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>

      <Header>
        <BackButton onPress={handleBack} />
      </Header>

      <CarImages>
        <ImageSlider imageUrl={car.photos} />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>
          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <Accessories>
          {car.accessories.map(accesory => (
            <Accessory
              key={accesory.type}
              name={accesory.name}
              icon={getAccessoryIcon(accesory.type)}
            />
          ))}

        </Accessories>

        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button title='Escolher período do alugel' onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
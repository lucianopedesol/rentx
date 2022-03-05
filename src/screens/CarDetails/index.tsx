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
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function CarDetails() {
  const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1uDELAOoFFlU7OqH4L8kEMXDITc-QdDVgOvYxIT5PDlu4IqEuXQO4Utht_lCOAQn0hhA&usqp=CAU';
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('Scheduling');

  }

  return (
    <Container>
       
      <Header>
        <BackButton onPress={() => { }} />
      </Header>

      <CarImages>
        <ImageSlider imageUrl={image} />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Lamborgini</Brand>
            <Name>huracan</Name>
          </Description>
          <Rent>
            <Period>Ao Dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory icon={speedSvg} name={'380Km/h'} />
          <Accessory icon={accelarationSvg} name={'3.2s'} />
          <Accessory icon={forceSvg} name={'800 HP'} />
          <Accessory icon={gasolineSvg} name={'Gasolina'} />
          <Accessory icon={exchangeSvg} name={'Auto'} />
          <Accessory icon={peopleSvg} name={'2 pessoas'} />
        </Accessories>

        <About>
          Este é automóvel desportivo. Surgiu do lendário
          touro de lide indultado na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar.
        </About>
        <About>
          Este é automóvel desportivo. Surgiu do lendário
          touro de lide indultado na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar.
        </About>
        <About>
          Este é automóvel desportivo. Surgiu do lendário
          touro de lide indultado na praça Real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar.
        </About>
      </Content>
      <Footer>
        <Button title='Escolher período do alugel' onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
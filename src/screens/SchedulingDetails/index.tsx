import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

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
  Accessories,
  Footer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceLabel,
  RentalPriceDetails,
  RentalPriceQuota,
  RentalPriceTotal,
} from './styles';
import { Button } from '../../components/Button';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

export function SchedulingDetails() {
  const theme = useTheme();
  const image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1uDELAOoFFlU7OqH4L8kEMXDITc-QdDVgOvYxIT5PDlu4IqEuXQO4Utht_lCOAQn0hhA&usqp=CAU';

  const navigation = useNavigation();
  function handleConfirm() {
    navigation.navigate('SchedulingComplete');

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

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(24)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>18/06/2021</DateValue>
          </DateInfo>

        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button title='Alugar agora' color={theme.colors.success} onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
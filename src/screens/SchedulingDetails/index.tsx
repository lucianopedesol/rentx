import React, { useEffect, useState } from 'react';

import { useNavigation, useRoute } from '@react-navigation/native';
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
import { ICarDTO } from '../../dtos/ICarDTO';

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { format } from 'date-fns';
import api from '../../services/api';
import { Alert } from 'react-native';
import { faIR } from 'date-fns/locale';


interface IParams {
  car: ICarDTO,
  dates: string[];
}
interface IRentalPeriod {
  startFormatted: string
  endFormatted: string
}
export function SchedulingDetails() {
  const [loading, setLoading] = useState<boolean>(false);
  const [rentalPeriod, setRentalPeriod] = useState<IRentalPeriod>({} as IRentalPeriod);

  const theme = useTheme();

  const navigation = useNavigation();
  const route = useRoute();
  const { car, dates } = route.params as IParams;

  const rentTotal = Number(dates.length * Number(car.rent.price));

  async function handleConfirm() {
    setLoading(true);
    const schedulesCar = await api.get(`schedules_bycars/${car.id}`)

    const unavailable_dates = {
      ...schedulesCar.data.unavailable_dates,
      ...dates
    }

    await api.post(`schedules_byuser`, {
      user_id: 1,
      car,
      startDate: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endDate: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),

    })

    api.put(`schedules_bycars/${car.id}`, {
      id: car.id,
      unavailable_dates
    }).then(response => {
      navigation.navigate('SchedulingComplete');

    }).catch(() => {
      Alert.alert('Não foi possível confirmar o agendamento.')
      setLoading(false);
    });

  }

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      startFormatted: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    })
  }, [])

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
            <DateValue>{rentalPeriod.startFormatted}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(24)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.endFormatted}</DateValue>
          </DateInfo>

        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>{`R$ ${car.rent.price} x${dates.length} diárias`}</RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button title='Alugar agora' color={theme.colors.success} enabled={!loading} loading={loading} onPress={handleConfirm} />
      </Footer>
    </Container>
  );
}
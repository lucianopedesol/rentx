import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';

import ArrowSvg from '../../assets/arrow.svg'
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer
} from './styles';
import { Button } from '../../components/Button';

import {
  Calendar,
  generateInterval,
  IDateObject,
  IMarkedDateProps
} from '../../components/Calendar';

import { useNavigation, useRoute } from '@react-navigation/native';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { format } from 'date-fns';
import { Alert } from 'react-native';
import { ICarDTO } from '../../dtos/ICarDTO';

interface IRentalPeriod {
  startFormatted: string
  endFormatted: string
}
interface IParams {
  car: ICarDTO
}
export function Scheduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<IDateObject>({} as IDateObject)
  const [markedDates, setMarkedDates] = useState<IMarkedDateProps>({} as IMarkedDateProps)
  const [rentalPeriod, setRentalPeriod] = useState<IRentalPeriod>({} as IRentalPeriod)


  const theme = useTheme();

  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as IParams;

  function handleConfirmRental() {

    navigation.navigate('SchedulingDetails', {
      car: car,
      dates: Object.keys(markedDates)
    });


  }
  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: IDateObject) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod(
      {
        startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyy'),
        endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyy')
      }
    )
  }
  return (
    <Container>
      <Header>

        <BackButton color={theme.colors.shape} onPress={handleBack} />
        <Title>
          Escolha uma{'\n'}
          data de início e{'\n'}
          fim do aluguel
        </Title>
        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>
          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button title="Confirmar" enabled={!!rentalPeriod.startFormatted}   onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
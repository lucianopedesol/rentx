import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from 'styled-components';


import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList
} from './styles';

export function Home() {
  const navigation = useNavigation();
  const cardData = {
    brand: 'Audi',
    name: 'RS 5 Coupe',
    rent: {
      period: 'Ao Dia',
      price: '120',
    },
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1uDELAOoFFlU7OqH4L8kEMXDITc-QdDVgOvYxIT5PDlu4IqEuXQO4Utht_lCOAQn0hhA&usqp=CAU',
  };

  const theme = useTheme();

  function handleCarDetails() {
    console.log("oi")
    navigation.navigate('CarDetails');

  }

  return (
    <Container>
    
      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total 12 carros
          </TotalCars>

        </HeaderContent>
      </Header>

      <CarList
        data={[1, 2, 3, 1, 2, 3]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={(item) => <Car data={cardData} onPress={handleCarDetails} />}
      />


    </Container>
  );
}
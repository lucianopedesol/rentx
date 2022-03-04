import React from 'react';
import { FlatList, StatusBar } from 'react-native';

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";


import Logo from '../../assets/logo.svg';
import { Car, ICardData } from '../../components/Car';
import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList
} from './styles';

export function Home() {
  const cardData = {
    brand: 'Audi',
    name: 'RS 5 Coupe',
    rent: {
      period: 'Ao Dia',
      price: '120',
    },
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1uDELAOoFFlU7OqH4L8kEMXDITc-QdDVgOvYxIT5PDlu4IqEuXQO4Utht_lCOAQn0hhA&usqp=CAU',
  };

  return (
    <Container>
      <StatusBar barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
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
        renderItem={(item) => <Car data={cardData} />}
      />


    </Container>
  );
}
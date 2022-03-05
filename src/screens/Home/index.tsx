import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

import { Ionicons } from '@expo/vector-icons';

import { RFValue } from "react-native-responsive-fontsize";


import Logo from '../../assets/logo.svg';
import { Car } from '../../components/Car';
import { Load } from '../../components/Load';
import { ICarDTO } from '../../dtos/ICarDTO';

import api from '../../services/api';

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
  MyCarsButton
} from './styles';

export function Home() {
  const [cars, setCars] = useState<ICarDTO[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation();

  const theme = useTheme();
  function handleCarDetails(car: ICarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  function handleMyCars() {
    navigation.navigate('MyCars');
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, [])
  return (
    <Container>

      <Header>
        <HeaderContent>
          <Logo
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total {cars.length} carros
          </TotalCars>

        </HeaderContent>
      </Header>

      {loading ?
        <Load />
        :
        (
          <CarList
            data={cars}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              <Car data={item} onPress={() => handleCarDetails(item)} />
            }
          />
        )
      }

      
      <MyCarsButton onPress={handleMyCars}>
        <Ionicons
          name="ios-car-sport"
          size={RFValue(32)}
          color={theme.colors.shape}
        />
      </MyCarsButton>
    </Container>
  );
}
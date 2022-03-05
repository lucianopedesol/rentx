import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { Load } from '../../components/Load';
import { ICarDTO } from '../../dtos/ICarDTO';
import api from '../../services/api';

import {
    Container,
    Header,
    Title,
    SubTitle,
    Contet,
    Appointments,
    AppointmentsTitle,
    AppointmentsQuantity,
    CarWrapper,
    CarFooter,
    CarFooterTitle,
    CarFooterPeriod,
    CarFooterDate,
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';


interface ICarProps {
    user_id: string;
    id: string;
    car: ICarDTO
    startDate: string,
    endDate: string,
}
export function MyCars() {
    const [cars, setCars] = useState<ICarProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const theme = useTheme();

    const navigation = useNavigation();

    function handleBack() {
        navigation.goBack();
    }


    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get(`schedules_byuser?user_id=1`);
                setCars(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };
        fetchCars();
    }, [])
    return (
        <Container>
            <Header>
                <BackButton color={theme.colors.shape} onPress={handleBack} />
                <Title>
                    Escolha uma{'\n'}
                    data de início e{'\n'}
                    fim do aluguel
                </Title>
                <SubTitle>
                    Conforto, segurança e praticidade
                </SubTitle>
            </Header>
            {loading ?
                <Load />
                :
                (
                    <Contet>
                        <Appointments>
                            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
                            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
                        </Appointments>


                        <FlatList
                            data={cars}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) =>
                                <CarWrapper>
                                    <Car data={item.car} onPress={() => { }} />
                                    <CarFooter>
                                        <CarFooterTitle>Período</CarFooterTitle>
                                        <CarFooterPeriod>
                                            <CarFooterDate>{item.startDate}</CarFooterDate>
                                            <AntDesign
                                                name="arrowright"
                                                size={RFValue(20)}
                                                color={theme.colors.title}
                                                style={{ marginHorizontal: RFValue(10) }}
                                            />

                                            <CarFooterDate>{item.endDate}</CarFooterDate>
                                        </CarFooterPeriod>
                                    </CarFooter>

                                </CarWrapper>
                            }
                        />

                    </Contet>
                )
            }


        </Container>
    );
}
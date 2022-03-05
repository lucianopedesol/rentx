import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { StatusBar, useWindowDimensions } from 'react-native';

import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
    Container,
    Content,
    Title,
    Menssage,
    Footer,
} from './styles';
import { ConfirmButtom } from '../../components/ConfirmButtom';

export function SchedulingComplete() {
    const { width } = useWindowDimensions();

    const navigation = useNavigation();
    function handleConfirm() {
      navigation.navigate('Home');
  
    }

    return (
        <Container>
         
            <LogoSvg width={width} />

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Carro Alugado!</Title>
                <Menssage>
                    Agora você só precisa ir{'\n'}
                    até a concessionária da RENTX {'\n'}
                    pegar seu automóvel
                </Menssage>
            </Content>

            <Footer>
                <ConfirmButtom title='OK' onPress={handleConfirm} />
            </Footer>
        </Container>
    );
}
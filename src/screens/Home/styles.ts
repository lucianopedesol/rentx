import { FlatList, FlatListProps } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { ICarDTO } from '../../dtos/ICarDTO';

export const Container = styled.View`
    flex: 1; 
    background-color: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    height: 113px;
    
    background-color: ${({ theme }) => theme.colors.header};
    justify-content: flex-end;
`;
export const HeaderContent = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 32px 24px;
`;

export const TotalCars = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text}; 
`;

export const CarList = styled(FlatList as new (props: FlatListProps<ICarDTO>) => FlatList<ICarDTO>).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})`
  
`;

export const MyCarsButton = styled.TouchableOpacity`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;

    background-color: ${({ theme }) => theme.colors.main};

    justify-content: center ;
    align-items: center;

    border-radius: ${RFValue(30)}px;

    position: absolute;
    bottom: 13px;
    right: 22px
`;
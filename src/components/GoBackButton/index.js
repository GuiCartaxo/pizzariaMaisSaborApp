import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { GoBackButtonContainer, GoBackButtonBtn } from './styles';

import Feather from 'react-native-vector-icons/Feather';

export default function GoBackButton() {
    const navigation = useNavigation();

    function goBack() {
        navigation.goBack();
    }

    return (
        <GoBackButtonContainer>
            <GoBackButtonBtn onPress={ () => (goBack()) }>
                <Feather name="arrow-left-circle" size={40} color="#808080"/>
            </GoBackButtonBtn>
        </GoBackButtonContainer>
    );
}
import React from 'react';
import LoginButton from '../../components/LoginButton';

import { Container, ButtonsContainer, MenuButton, MenuText, PhoneOrderButton, PhoneOrderText, AboutButton, AboutText } from './styles';

import AuthBackground from '../../components/AuthBackground';
import { useNavigation } from '@react-navigation/native';

export default function InitialScreen() {
    const navigation = useNavigation();

    function goMenu() {
        navigation.navigate('Menu');
    }

    function goAboutUsNotLoged() {
        navigation.navigate('AboutUsNotLoged');
    }

    return (
        <Container>   
            <AuthBackground />
            <ButtonsContainer>
                <LoginButton />
                <MenuButton onPress={ () => {goMenu()} }>
                    <MenuText>Cardápios</MenuText>
                </MenuButton>
                <PhoneOrderButton>
                    <PhoneOrderText>Peça por Telefone</PhoneOrderText>
                </PhoneOrderButton>
                <AboutButton onPress={ () => {goAboutUsNotLoged()} }>
                    <AboutText>Sobre Nós</AboutText>
                </AboutButton>
            </ButtonsContainer>
        </Container>
    );
}
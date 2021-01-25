import React from 'react';
import { View } from 'react-native';

import { LoginBtn, LoginText } from './styles';

import { useNavigation } from '@react-navigation/native';

export default function LoginButton({ email, password }) {
    const navigation = useNavigation();

    function goSignIn() {
        navigation.navigate('SignIn');
    }

    return (
        <View style={{width: '100%'}}>
            <LoginBtn onPress={ () => {goSignIn()} } >
                <LoginText>Login</LoginText>             
            </LoginBtn>
        </View>
    );
}
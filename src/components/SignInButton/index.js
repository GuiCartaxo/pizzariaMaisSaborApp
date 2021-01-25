import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { SignInBtn, SignInText } from './styles';

import { AuthContext } from '../../contexts/auth';

export default function SignInButton({ email, password }) {
    const { loadingAuth, signIn } = useContext(AuthContext);

    function handleSignIn() {
        if(!email || !password) {
            alert('Preencha todos os campos!')

            return;
        }

        signIn(email, password);
    }

    return (
        <View>
            <SignInBtn onPress={ () => {handleSignIn()} } >
                {
                    loadingAuth ? (
                        <ActivityIndicator size={40} color="#222"/>
                    ) : (
                        <SignInText>Entrar</SignInText>
                    )
                }              
            </SignInBtn>
        </View>
    );
}
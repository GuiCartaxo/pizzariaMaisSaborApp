import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';

import { SingInContainer, ButtonsContainer, EmailInput, SenhaInput, SignUpButton, SignUpText } from './styles';

import SignInButton from '../../components/SignInButton';
import GoBackButton from '../../components/GoBackButton';
import AuthBackground from '../../components/AuthBackground';

import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    function goSignUp() {
        navigation.navigate('SignUp');
    }

    return (  
        
        <KeyboardAvoidingView
        keyboardVerticalOffset={30}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{flex: 1, backgroundColor: 'hsl(65, 62%, 75%)', flexDirection: 'column', justifyContent: 'center' }}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <SingInContainer>
                        <ButtonsContainer>
                            <GoBackButton />
                            <AuthBackground /> 
                            <EmailInput  onChangeText={ (text) => setEmail(text) } placeholder='Email' style={{ textAlignVertical: 'bottom' }} placeholderTextColor='#BAA1A1' />
                            <SenhaInput secureTextEntry={true} onChangeText={ (text) => setPassword(text) } placeholder='Senha' style={{ textAlignVertical: 'bottom' }} placeholderTextColor='#BAA1A1' />                
                            <SignInButton email={email} password={password} />
                            <SignUpButton onPress={ () => {goSignUp()} }><SignUpText>Não tem uma conta? Cadastre-se já</SignUpText></SignUpButton>
                        </ButtonsContainer>
                    </SingInContainer>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}



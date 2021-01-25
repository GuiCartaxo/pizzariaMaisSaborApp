import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View, Image, ScrollView, ActivityIndicator } from 'react-native';

import { SingUpContainer, ButtonsContainer, NameRegister, AddressRegister, CelphoneRegister, EmailRegister, PasswordRegister, SignUpButton, SignUpText } from './styles';

import GoBackButton from '../../components/GoBackButton';

import { AuthContext } from '../../contexts/auth';

export default function SignIn() {
    const { signUp, loadingAuth } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [celphone, setCelphone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp() {
        signUp(name, address, celphone, email, password);
    }

    return (  
        
        <KeyboardAvoidingView
        keyboardVerticalOffset={30}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{flex: 1, backgroundColor: 'hsl(65, 62%, 75%)', flexDirection: 'column', justifyContent: 'center' }}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <SingUpContainer>
                        <ButtonsContainer>
                            <GoBackButton/>
                            <View style={{ height: 180, marginTop: 60 }}>
                                <Image style={{ flex: 1, resizeMode: 'contain' }} source={require('../../../assets/Images/pizzasignup.png')}/>
                            </View>
                            <NameRegister placeholder='Nome' value={name} onChangeText={ (text) => {setName(text)} } style={{ textAlignVertical: 'bottom' }} placeholderTextColor='#BAA1A1' />
                            <AddressRegister placeholder='Endereço' value={address} onChangeText={ (text) => {setAddress(text)} } style={{ textAlignVertical: 'bottom' }} placeholderTextColor='#BAA1A1' />  
                            <CelphoneRegister placeholder='Telefone' value={celphone} onChangeText={ (text) => {setCelphone(text)} } style={{ textAlignVertical: 'bottom' }} placeholderTextColor='#BAA1A1' /> 
                            <EmailRegister placeholder='Email' value={email} onChangeText={ (text) => {setEmail(text)} } style={{ textAlignVertical: 'bottom' }} placeholderTextColor='#BAA1A1' /> 
                            <PasswordRegister secureTextEntry={true} placeholder='Senha' value={password} onChangeText={ (text) => {setPassword(text)} } style={{ textAlignVertical: 'bottom' }} placeholderTextColor='#BAA1A1' />               
                            <SignUpButton onPress={handleSignUp}>
                                {
                                    loadingAuth ? (
                                        <ActivityIndicator size={40} color="#222"/>
                                    ) : (
                                        <SignUpText>Cadastrar</SignUpText>
                                    )
                                }    
                            </SignUpButton>
                        </ButtonsContainer>
                    </SingUpContainer>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView> 
    );
}



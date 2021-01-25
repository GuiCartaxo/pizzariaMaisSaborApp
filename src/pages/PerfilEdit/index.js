import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, View, Image, ScrollView, ActivityIndicator } from 'react-native';

import { SingUpContainer, ButtonsContainer, NameRegister, AddressRegister, CelphoneRegister, SignUpButton, SignUpText } from './styles';

import GoBackButton from '../../components/GoBackButton';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/auth';
import firestore from '@react-native-firebase/firestore';

export default function PerfilEdit() {
    const { loadingAuth, user, storageUser, setUser } = useContext(AuthContext);

    const navigation = useNavigation();

    const [name, setName] = useState(user?.name);
    const [address, setAddress] = useState(user?.address);
    const [celphone, setCelphone] = useState(user?.telephone);

    async function updateProfile() {
        if (name === '') {
            return;
        }

        await firestore().collection('users')
        .doc(user.uid).update({
            name: name,
            address: address,
            telephone: celphone
        })

        let data = {
            uid: user.uid,
            name: name, 
            address: address,
            telephone: celphone
        };

        setUser(data);
        storageUser(data);
        navigation.navigate('Home');
    }

    return (  
        
        <KeyboardAvoidingView
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
                            <NameRegister placeholder={user?.name} value={name} onChangeText={ (text) => {setName(text)} } style={{ textAlignVertical: 'bottom' }} placeholderTextColor='#BAA1A1' />
                            <AddressRegister placeholder={user?.address} value={address} onChangeText={ (text) => {setAddress(text)} } style={{ textAlignVertical: 'bottom' }} placeholderTextColor='#BAA1A1' />  
                            <CelphoneRegister placeholder={user?.telephone} value={celphone} onChangeText={ (text) => {setCelphone(text)} } style={{ textAlignVertical: 'bottom' }} placeholderTextColor='#BAA1A1' /> 
                            <SignUpButton onPress={updateProfile}>
                                {
                                    loadingAuth ? (
                                        <ActivityIndicator size={20} color="#000"/>
                                    ) : (
                                        <SignUpText>Atualizar</SignUpText>
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
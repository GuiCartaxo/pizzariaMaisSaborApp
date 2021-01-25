import React from 'react';
import { View } from 'react-native'

import { Logo } from './styles';

export default function AuthBackground() {
    return (
        <View style={{ width: '100%' }}>       
            <Logo  style={{ marginLeft: 'auto', marginRight: 'auto' }} source={require('../../../assets/Images/logoexpress.png')}/>
        </View>
    );
}
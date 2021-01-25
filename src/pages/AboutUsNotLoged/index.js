import React from 'react';
import { Text, ScrollView, View } from 'react-native'

import { AboutUsNotLogedContainer, AboutUsImage, AboutUsText } from './styles';

import GoBackButton from '../../components/GoBackButton';

export default function SignIn() {

    return (  
        <ScrollView style={{ backgroundColor: 'hsl(65, 62%, 75%)' }}>
            <AboutUsNotLogedContainer>
            <GoBackButton />
            <View style={{ height: 250 }}>
                <AboutUsImage style={{ flex: 1, resizeMode: 'contain' }} source={require('../../../assets/Images/pizzaiolo.png')}/>
            </View>
            <AboutUsText>A pizzaria <Text style={{ color: '#960000' }}>Mais Sabor</Text> sugiu do sonho de um casal em ter o seu próprio negócio. Com muito amor e carinho, iniciaram esta jornada trazendo o melhor do sabor italiano para você!</AboutUsText>
            </AboutUsNotLogedContainer>
        </ScrollView>
    );
}
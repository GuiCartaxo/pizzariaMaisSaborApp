import React, { useState } from 'react';
import { View, FlatList, Text, Image } from 'react-native';

import { MenuContainer, FlatListContainer } from './styles';

import LoginButton from '../../components/LoginButton';
import AuthBackground from '../../components/AuthBackground';
import GoBackButton from '../../components/GoBackButton';

import { ListaPizzas } from '../../assets/Lista de Pizzas';

export default function Menu() {
  const [pizzas, setPizzas] = useState(ListaPizzas);

  return ( 
    <MenuContainer> 
      <FlatList 
        ListHeaderComponent={
          <FlatListContainer>
            <GoBackButton />
            <AuthBackground />
            <LoginButton />
          </FlatListContainer>
        }
      style={{ width: '100%' }}
      ListHeaderComponentStyle={{ marginBottom: 40 }}
      data={pizzas} renderItem={ ({item}) => {
        return <MenuList data={item}/>
      } }/>
    </MenuContainer>
    );
}

function MenuList({data}) {
  return <View style={{ flex: 1 }}>
      <View style={{backgroundColor: '#FFF', width: '80%', padding: 10, marginLeft: 'auto', marginRight: 'auto', marginBottom: 30, borderWidth: 1, borderBottomColor: '#000' }}>
      <Image source={data.urlPhoto} style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto' }}/>
      <Text style={{ width: '100%', textAlign: 'center', fontWeight: 'bold' }}>{data.name}</Text>
      <Text style={{ width: '100%', textAlign: 'center', fontStyle: 'italic' }}>{data.description}</Text>
      <Text style={{ width: '100%', textAlign: 'center' }}>R$ {data.price}</Text>
    </View>
  </View>
  
}


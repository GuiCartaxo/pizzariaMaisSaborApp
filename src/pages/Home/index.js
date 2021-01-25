import React, { useState, useContext, useEffect } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import { MenuContainer, FlatListContainer, WelcomeUser, UserName } from './styles';

import AuthBackground from '../../components/AuthBackground';
import LogoutButton from '../../components/LogoutButton';

import { AuthContext } from '../../contexts/auth';
import { ListaPizzas } from '../../assets/Lista de Pizzas';

export default function Menu() {
  const [pizzas, setPizzas] = useState(ListaPizzas);
  const { user } = useContext(AuthContext);

  return ( 
    <MenuContainer> 
      <FlatList 
        ListHeaderComponent={
          <FlatListContainer>
            <LogoutButton />
            <AuthBackground />
            <WelcomeUser>
              <UserName>Bem vindo, { user.name }!</UserName>
            </WelcomeUser>
          </FlatListContainer>
        }
        style={{ width: '100%' }}
        ListHeaderComponentStyle={{ marginBottom: 40 }}
        data={pizzas} renderItem={ ({item, index}) => {
        return <MenuList data={item} index={index}/>
      } }/>
    </MenuContainer>
    );
}

export function MenuList({ data, index }) {
  const { userOrder, updateUserOrder, updateTotalPrice, cleanUserOrder, setCleanUserOrder } = useContext(AuthContext);

  const [arrayItemsAdded, setArrayItemsAdded] = useState(false);
  const [styleTextBackground, setStyleTextBackground] = useState('#DDD');
  const [styleTextColor, setStyleTextColor] = useState('#000');
  const [styleTextBorder, setStyleTextBorder] = useState('#CCC');

  useEffect(() => {
    if(cleanUserOrder){
      setArrayItemsAdded(false); 
      setStyleTextBackground('#DDD');
      setStyleTextColor('#000');
      setStyleTextBorder('#CCC');
      setCleanUserOrder(false);
    }
  }, [cleanUserOrder])


  return <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{backgroundColor: '#FFF', width: '80%', padding: 10, marginLeft: 'auto', marginRight: 'auto', marginBottom: 30, borderWidth: 1, borderColor: '#000' }}>
      <Image source={data.urlPhoto} style={{ width: 100, height: 100, marginLeft: 'auto', marginRight: 'auto' }}/>
      <Text style={{ width: '100%', textAlign: 'center', fontWeight: 'bold' }}>{data.name}</Text>
      <Text style={{ width: '100%', textAlign: 'center', fontStyle: 'italic' }}>{data.description}</Text>
      <Text style={{ width: '100%', textAlign: 'center' }}>R$ {data.price}</Text>
      <TouchableOpacity onPress={ () => { 

        let userOrdersLocal = userOrder;

        if(arrayItemsAdded){
          userOrdersLocal = userOrdersLocal.filter( item => item.id != data.id );
          setArrayItemsAdded(false); 
          setStyleTextBackground('#DDD');
          setStyleTextColor('#000');
          setStyleTextBorder('#CCC');
        } 
        else {
          userOrdersLocal = userOrdersLocal.concat(data);
          setArrayItemsAdded(true); 
          setStyleTextBackground('red');
          setStyleTextColor('#FFF');
          setStyleTextBorder('#FFF');
        }

        updateUserOrder(userOrdersLocal);
        updateTotalPrice(userOrdersLocal);

      }} 
        style={{ backgroundColor: styleTextBackground, padding: 3, marginTop: 10, borderRadius: 5, borderColor: styleTextBorder, borderWidth: 1 }}>
        <Text style={{ textAlign: 'center', color: styleTextColor }}>
          {arrayItemsAdded ? 'Remover do pedido' : 'Adicionar ao pedido'}
        </Text>
      </TouchableOpacity>
    </View>
  </View>
  
}


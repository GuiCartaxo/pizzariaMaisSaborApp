import React, { useContext, useState } from 'react';
import { View, Text, FlatList, TextInput, KeyboardAvoidingView, Modal } from 'react-native';

import { FinishOrderContainer, WelcomeUser, UserName, FlatListContainer, EditOrderButton, FinishOrderBtn, FinishOrderText, CloseModalBtn, CloseModalText } from './styles';

import CheckBox from '@react-native-community/checkbox';
import LogoutButton from '../../components/LogoutButton';

import { AuthContext } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

export default function FinishOrder() {
    const { userOrder, userTotalPrice, updateUserOrder, setCleanUserOrder } = useContext(AuthContext);
    const [toggleCheckBoxDebito, setToggleCheckBoxDebito] = useState(false);
    const [toggleCheckBoxDinheiro, setToggleCheckBoxDinheiro] = useState(false);
    const [change, setChange] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();

    function editOrder() {
        navigation.navigate('Home');
    }

    function returnHome() {
        navigation.navigate('Home');
    }

    if(userOrder.length > 0){
        return (
            <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={{flex: 1, backgroundColor: 'hsl(65, 62%, 75%)' }}
            >
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            >
                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '50%', backgroundColor: 'white', marginTop: 'auto', borderColor: '#000', borderWidth: 1, width: '100%' }}>
                    <View style={{ paddingVertical: 20 }}>
                        <Text style={{ fontSize: 20, textAlign: 'center' }}>Pedido Efetuado com Sucesso!</Text>
                    </View>
                    <View style={{ paddingVertical: 20 }}>
                        <Text style={{ fontSize: 20, textAlign: 'center' }}>N° do pedido: 123456</Text>
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <CloseModalBtn onPress={ () => {
                            setModalVisible(false);
                            updateUserOrder([]);
                            setCleanUserOrder(true);
                            returnHome();
                        } } >
                            <CloseModalText>OK!</CloseModalText>             
                        </CloseModalBtn>
                    </View>
                </View>
            </Modal>
            <FinishOrderContainer style={{ backgroundColor: 'hsl(65, 62%, 75%)', width: '100%' }}> 
                <FlatListContainer>
                    <LogoutButton />
                    <WelcomeUser>
                        <UserName>Confira seu pedido</UserName>
                    </WelcomeUser>
                </FlatListContainer>
                <View style={{ flex: 3, width: '90%', borderColor: '#000', borderWidth: 1, marginBottom: 30  }}>
                    <FlatList 
        
                    style={{ backgroundColor: 'white' }}
        
                    data={userOrder}
        
                    renderItem={ ({item}) => {
                        return <Order data={item}/>
                    } }
        
                    ListFooterComponent = {
                        <View>
                            <View style={{ padding: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontWeight: 'bold' }}>Total</Text>
                                <Text style={{ fontWeight: 'bold' }}>R$ {userTotalPrice.toFixed(2)}</Text>                               
                            </View>
                            <View style={{ padding: 10, flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <EditOrderButton onPress={editOrder}><Text>Editar Pedido</Text></EditOrderButton>
                            </View>
                            <View style={{ padding: 10, flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ fontWeight: 'bold' }}>Forma de pagamento</Text>
                            </View>
                            <View style={{ paddingLeft: 10, flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBoxDebito}
                                    onValueChange={(newValue) => {
                                        setToggleCheckBoxDebito(newValue);
                                        setToggleCheckBoxDinheiro(!newValue);
                                    }}
                                />
                                <Text>Debito</Text>
                            </View>
                            <View style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 20, flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <CheckBox
                                        disabled={false}
                                        value={toggleCheckBoxDinheiro}
                                        onValueChange={(newValue) => {
                                            setToggleCheckBoxDinheiro(newValue); 
                                            setToggleCheckBoxDebito(!newValue);
                                        }}
                                    />
                                    <Text>Dinheiro</Text>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={{ paddingRight: 2 }}>Troco:</Text>
                                    <TextInput keyboardType='numeric' value={change} onChangeText={ (text) => setChange(text) } maxLength={4} placeholder='R$ 0,00' editable={toggleCheckBoxDinheiro} style={{ borderColor: '#000', borderWidth: 1, width: '100%', height: 30, maxWidth: 80, fontSize: 11, paddingBottom: 0, paddingTop: 0 }}/>
                                </View>
                            </View>
                            <View style={{width: '100%', marginBottom: 20}}>
                                <FinishOrderBtn onPress={ () => {setModalVisible(true)} } >
                                    <FinishOrderText>Finalizar Pedido</FinishOrderText>             
                                </FinishOrderBtn>
                            </View>
                        </View>  
                    }
                    />
                </View>
            </FinishOrderContainer>
            </KeyboardAvoidingView>
        );
    } else {
        return (
            <FinishOrderContainer style={{ backgroundColor: 'hsl(65, 62%, 75%)', width: '100%' }}> 
                <FlatListContainer>
                            <LogoutButton />
                            <WelcomeUser>
                                <UserName>Confira seu pedido</UserName>
                            </WelcomeUser>
                        </FlatListContainer>
                <View style={{ flex: 2, width: '90%', borderColor: '#000', borderWidth: 1, marginBottom: 30, marginTop: 10, }}>
                    <FlatList 
    
                    style={{ backgroundColor: 'white' }}

                    contentContainerStyle={{ flexGrow: 1 }}

                    ListEmptyComponent = {
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}><Text>Não há itens em seu pedido!</Text></View>
                    }

                    />
                </View>
                
            </FinishOrderContainer>
        );
    }
}

function Order({data}) {

    return (
        <View style={{ padding: 10, backgroundColor: 'white' }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>1x {data?.name}</Text>
                <Text>R$ {data?.price.toFixed(2)}</Text>
            </View>
        </View>
    )
}
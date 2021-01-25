import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feather from 'react-native-vector-icons/Feather';

import Home from '../pages/Home';
import PerfilEdit from '../pages/PerfilEdit';
import FinishOrder from '../pages/FinishOrder';
import AboutUsLoged from '../pages/AboutUsLoged';

const Tab = createBottomTabNavigator();

function AppRoutes() {
    return (
        <Tab.Navigator tabBarOptions={{
            keyboardHidesTabBar: true,
            style: {
                backgroundColor: '#202225',
                borderTopWidth: 0,
            },
            activeTintColor: '#FFF',
            labelStyle: {
                paddingBottom: 2
            },
            iconStyle: {
                padding: 0
            }
        }}>
            <Tab.Screen 
            name='Home' 
            component={ Home }
            options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name="home" color={color} size={size} />
                },
            }}
            />

            <Tab.Screen 
            name='Finalizar Pedido' 
            component={ FinishOrder }
            options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name="credit-card" color={color} size={size} />
                },
            }}
            />

            <Tab.Screen 
            name='Editar Perfil' 
            component={ PerfilEdit }
            options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name="edit" color={color} size={size} />
                },
            }}
            />

            <Tab.Screen 
            name='Sobre' 
            component={ AboutUsLoged }
            options={{
                tabBarIcon: ({ color, size }) => {
                    return <Feather name="info" color={color} size={size} />
                },
            }}
            />
        </Tab.Navigator>
    );
}

export default AppRoutes;
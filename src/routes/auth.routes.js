import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import InitialScreen from '../pages/InitialScreen';
import SignIn from '../pages/SignIn';
import Menu from '../pages/Menu';
import AboutUsNotLoged from '../pages/AboutUsNotLoged';
import SignUp from '../pages/SignUp';

const Stack = createStackNavigator();

function AuthRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='InitialScreen' component={InitialScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }}/>
            <Stack.Screen name='Menu' component={Menu} options={{ headerShown: false }}/>
            <Stack.Screen name='AboutUsNotLoged' component={AboutUsNotLoged} options={{ headerShown: false }}/>
            <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}

export default AuthRoutes;
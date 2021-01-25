import React, { useContext } from 'react';

import { LogoutButtonContainer, LogoutButtonBtn, LogoutButtonText } from './styles';

import { AuthContext } from '../../contexts/auth';

export default function LogoutButton() {
    const { signOut } = useContext(AuthContext);

    return (
        <LogoutButtonContainer>
            <LogoutButtonBtn onPress={ () => (signOut()) }>
                <LogoutButtonText>Sair</LogoutButtonText>
            </LogoutButtonBtn>
        </LogoutButtonContainer>
    );
}
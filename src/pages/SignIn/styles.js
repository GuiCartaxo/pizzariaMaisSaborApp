import styled from 'styled-components/native';

export const SingInContainer = styled.View`
    background-color: hsl(65, 62%, 75%);
    width: 100%;
    height: 100%;
`;

export const ButtonsContainer = styled.View`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const EmailInput = styled.TextInput`
    background-color: #FFF;
    border-radius: 5px;
    border: 2px solid black;
    width: 70%;
    font-size: 16px;
    text-align: center;
    font-family: 'Rock Salt Regular';
    margin-top: 20px;
`;

export const SenhaInput = styled.TextInput`
    background-color: #FFF;
    border-radius: 5px;
    border: 2px solid black;
    width: 70%;
    font-size: 16px;
    text-align: center;
    font-family: 'Rock Salt Regular';
    margin-top: 15px;
`;

export const SignInButton = styled.TouchableOpacity`
    background-color: #FCA39D;
    padding: 0px 10px;
    border-radius: 5px;
    border: 2px solid black;
    width: 70%;
    margin-top: 15px;
`;

export const SignInText = styled.Text`
    font-size: 18px;
    font-family: 'Rock Salt Regular';
    text-align: center;
`;

export const SignUpButton = styled.TouchableOpacity`
    padding: 0px 10px;
    width: 70%;
    margin: 5px 0%;
`;

export const SignUpText = styled.Text`
    font-size: 18px;
    font-family: 'Rock Salt Regular';
    text-align: center;
`;

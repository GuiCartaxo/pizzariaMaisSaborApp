import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: hsl(65, 62%, 75%);
    justify-content: flex-start;
    align-items: center;
`;

export const ButtonsContainer = styled.View`
    flex: 1;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
`;

export const SignInButton = styled.TouchableOpacity`
    background-color: #FCA39D;
    padding: 0px 10px;
    border-radius: 5px;
    border: 2px solid black;
    width: 70%;
    margin: 5px 0%;
`;

export const SignInText = styled.Text`
    font-size: 18px;
    font-family: 'Rock Salt Regular';
    text-align: center;
`;

export const MenuButton = styled.TouchableOpacity`
    background-color: #E5CF04;
    padding: 0px 10px;
    border-radius: 5px;
    border: 2px solid black;
    width: 70%;
`;

export const MenuText = styled.Text`
    font-size: 18px;
    font-family: 'Rock Salt Regular';
    text-align: center;
`;


export const PhoneOrderButton = styled.TouchableOpacity`
    background-color: #E5CF04;
    padding: 0px 10px;
    border-radius: 5px;
    border: 2px solid black;
    width: 70%;
`;

export const PhoneOrderText = styled.Text`
    font-size: 18px;
    font-family: 'Rock Salt Regular';
    text-align: center;
`;


export const AboutButton = styled.TouchableOpacity`
    background-color: #E5CF04;
    padding: 0px 10px;
    border-radius: 5px;
    border: 2px solid black;
    width: 70%;
`;

export const AboutText = styled.Text`
    font-size: 18px;
    font-family: 'Rock Salt Regular';
    text-align: center;
`;

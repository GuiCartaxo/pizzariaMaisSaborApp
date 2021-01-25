import styled from 'styled-components/native';

export const FinishOrderContainer = styled.View`
    flex: 1;
    background-color: hsl(65, 62%, 75%);
    justify-content: flex-start;
    align-items: center;
`;

export const FlatListContainer = styled.View`
    flex: 1;
    width: 100%; 
    margin-bottom: 40px;
`;

export const WelcomeUser = styled.View`
    width: 100%;
    margin-top: 40px;
`;

export const UserName = styled.Text`
    font-size: 20px;
    color: #252525;
    text-align: center;
    font-family: 'Rock Salt Regular';
`;

export const EditOrderButton = styled.TouchableOpacity`
    max-width: 120px;
    background-color: #DDD;
    border-color: #000;
    border-width: 1px;
    border-radius: 5px;
    padding: 5px 10px;
`;

export const FinishOrderBtn = styled.TouchableOpacity`
    background-color: #FCA39D;
    padding: 0px 10px;
    border-radius: 5px;
    width: 60%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
`;

export const FinishOrderText = styled.Text`
    font-size: 13px;
    font-family: 'Rock Salt Regular';
    text-align: center;
`;

export const CloseModalBtn = styled.TouchableOpacity`
    background-color: #FCA39D;
    padding: 0px 10px;
    border-radius: 5px;
    width: 60%;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
`;

export const CloseModalText = styled.Text`
    font-size: 13px;
    font-family: 'Rock Salt Regular';
    text-align: center;
`;
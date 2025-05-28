import styled from "styled-components/native";
import { colors } from "../../theme/tokens";
import Constants from "expo-constants";

export const SafeArea = styled.SafeAreaView`
    flex: 1;
`

export const Container = styled.ScrollView`
`;

export const ContainerTop = styled.View`
    flex: 1;
    margin-top: ${Constants.statusBarHeight}px;
    justify-content: space-evenly;
`;

export const Top = styled.View`
    height: 200px;
    background-color: ${colors.primary};
    align-items: center;
`;

export const Main = styled.View`
    flex: 1;
    background-color: ${colors.secondary};
`;

export const ContainerIcons = styled.View`
    width: 85%;
    height: 68px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const IconUser = styled.View`
    width: 48px;
    height: 48px;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.13);
    justify-content: center;
    align-items: center;
`;

export const ContainerIconGroup = styled.View`
    flex-direction: row;
    gap: 24px;
`;

export const Name = styled.Text`
    color: ${colors.secondary};
    font-size: 18px;
    font-family: ${colors.fonts.Roboto_700Bold};
`;

export const ContainerMoney = styled.View`
    margin-bottom: 30px;
    margin-left: 30px;
    margin-top: 30px;
`;

export const TextAccount = styled.Text`
    color: ${colors.tertiary};
    font-size: 24px;
    font-family: ${colors.fonts.Roboto_500Medium};
`;

export const TextMoney = styled.Text`
    color: ${colors.tertiary};
    font-size: 32px;
    font-family: ${colors.fonts.Roboto_700Bold};
    margin-top: 12px;
`;

export const MoneyBox = styled.View`
    background-color: #F0F1F5;
    width: 219px;
    height: 32px;
`;


export const ContainerFletList = styled.View`
`;

export const ContainerCard = styled.View`
    width: 100%;
    height:60px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const ContainerItensCard = styled.View`
    background-color: ${colors.quaternary};
    width: 85%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    border-radius: 12px;
    padding-left: 12px;
`;

export const TextCard = styled.Text`
    font-family: ${colors.fonts.Roboto_500Medium};
    font-size: 16px;
    margin-left: 12px;
`;

export const ContainerFletListInfo = styled.View`
    margin-top: 30px;
`;

export const Div = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
    width: 100%;
    height: 2px;
    background-color: ${colors.quaternary};
`;

export const ContainerCreditCard = styled.View`
    margin: 30px;
    width: 100%;
    height: 200px;
`;

export const TextCreditCardTitle = styled.Text`
    font-family: ${colors.fonts.Roboto_500Medium};
    font-size: 24px;
    margin-bottom: 14px;
    margin-top: 8px;
`;

export const TextCreditCard = styled.Text`
    font-family: ${colors.fonts.Roboto_500Medium};
    font-size: 14px;
    margin-bottom: 14px;
    width: 80%;
`;

export const Space = styled.View`
    margin-top: 100px;
`;

export const TextDescubra = styled.Text`
    font-family: ${colors.fonts.Roboto_700Bold};
    font-size: 18px;
    margin-left: 30px;
`;

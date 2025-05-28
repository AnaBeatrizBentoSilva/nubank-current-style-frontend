import styled from "styled-components/native";
import { colors } from "../../theme/tokens";

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    width: 73px;
    margin-left: 10px;
`;

export const ContainerIcon = styled.View`
    width: 73px;
    height: 73px;
    border-radius: 50px;
    background-color: ${colors.quaternary};
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    margin-top: 14px;
    font-family: ${colors.fonts.Roboto_500Medium};
    font-size: 14px;
`;

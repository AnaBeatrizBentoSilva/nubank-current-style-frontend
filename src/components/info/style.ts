import styled from "styled-components/native";
import { colors } from "../../theme/tokens";

export const ContainerInfo = styled.View`
    background-color: ${colors.quaternary};
    width: 270px;
    height: 80px;
    border-radius: 12px;
    padding: 16px;
    justify-content: center;
    align-items: center;
`;

export const TextInfo = styled.Text<{ color: string }>`
    font-family: ${colors.fonts.Roboto_400Regular};
    font-size: 14px;
    color: ${props => props.color}
`;

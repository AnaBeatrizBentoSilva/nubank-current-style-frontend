import styled from "styled-components/native";
import { colors } from "../../theme/tokens";

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.primary};
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 180px;
    height: 180px;
`;

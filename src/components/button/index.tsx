import { Container, Text } from "./styles";

interface ButtonProps {
    children: any;
}


const Button: React.FC<ButtonProps> = ({ children }) => {
    return(
        <Container>
            <Text>{children}</Text>
        </Container>
    )
}
export default Button;
import { Button, Container, Titulo, Top, Text } from "./styles";
import ButtonPress from "../button";

const Portabilidade:React.FC = () => {
    return(
        <Container>
            <Top source={require("../../../assets/img.png")}/>
            <Button>
                <Titulo>Portabilidade de salário</Titulo>
                <Text>Sua liberdade financeira começa com você escolhendo...</Text>
                <ButtonPress>Conhecer</ButtonPress>
            </Button>
        </Container>
    )
}
export default Portabilidade;
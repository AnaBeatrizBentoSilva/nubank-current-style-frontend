import { Container, Logo } from "./styles";

export default function CustomSplash() {
  return (
    <Container >
      <Logo
        source={require('../../../assets/logo.png')}
        resizeMode="contain"
      />
    </Container>
  );
}

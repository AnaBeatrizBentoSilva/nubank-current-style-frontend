import { Container, ContainerIcon, Text } from "./style";

type ItemProps = {
    name: string;
    id: number;
    icon: any;
    itemOne?: boolean;
}

interface ButtonMenuProps {
    item: ItemProps;
}

const ButtonMenu:React.FC<ButtonMenuProps> = ({item}) => {
    return(
        <Container style={{marginLeft: item.itemOne ? 30 : 10}}>
            <ContainerIcon>{item.icon}</ContainerIcon>
            <Text>{item.name}</Text>
        </Container>
    )
}
export default ButtonMenu;
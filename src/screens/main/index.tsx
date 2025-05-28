import { FlatList, TouchableOpacity } from "react-native";
import { Container, ContainerCard, ContainerCreditCard, ContainerFletList, ContainerFletListInfo, ContainerIconGroup, ContainerIcons, ContainerItensCard, ContainerMoney, ContainerTop, Div, IconUser, Main, MoneyBox, Name, Space, TextAccount, TextCard, TextCreditCard, TextCreditCardTitle, TextDescubra, TextMoney, Top } from "./styles";
import { useState } from "react";
import IconEmailSVG from "../../../assets/svg/email";
import IconUserSVG from "../../../assets/svg/icon-user";
import IconOcultSVG from "../../../assets/svg/ocult";
import IconQUestionSVG from "../../../assets/svg/question";
import ButtonMenu from "../../components/button-menu";
import IconPixSVG from "../../../assets/svg/pix";
import IconPagarSVG from "../../../assets/svg/pagar";
import IconTranferenciaSVG from "../../../assets/svg/transferencia";
import IconDepositarSVG from "../../../assets/svg/depositar";
import IconRecargaSVG from "../../../assets/svg/recarga";
import IconCobrarSVG from "../../../assets/svg/cobrar";
import IconTransInternacionalSVG from "../../../assets/svg/tranfInternacional";
import IconCartaoSVG from "../../../assets/svg/cartao";
import Info from "../../components/info";
import Button from "../../components/button";
import Portabilidade from "../../components/portabilidade";

type ItemProps = {
    name: string;
    id: number;
    icon: any;
    itemOne?: boolean;
}

const Home: React.FC = () => {

    const [showValue, setShowValue] = useState(false);

    const toggleShowValue = () => {
        setShowValue(prev => !prev);
    };


    const itens: ItemProps[] = [
        { name: "Área Pix", id: 1, icon: <IconPixSVG width={25} height={25} />, itemOne: true },
        { name: "Pagar", id: 2, icon: <IconPagarSVG width={25} height={25} /> },
        { name: "Transferir", id: 3, icon: <IconTranferenciaSVG width={25} height={25} /> },
        { name: "Depositar", id: 4, icon: <IconDepositarSVG width={25} height={25} />, },
        { name: "Recarga", id: 5, icon: <IconRecargaSVG width={25} height={25} /> },
        { name: "Cobrar", id: 6, icon: <IconCobrarSVG width={25} height={25} /> },
        { name: "Transferir Internac.", id: 7, icon: <IconTransInternacionalSVG width={25} height={25} /> }
    ]

    const dataInfo = [{ itemOne: true, id: 1 }, { id: 2 }]

    return (
        <Container>
            <Top>
                <ContainerTop>
                    <ContainerIcons>
                        <IconUser>
                            <IconUserSVG width={16} height={19} />
                        </IconUser>
                        <ContainerIconGroup>
                            <TouchableOpacity onPress={toggleShowValue}>
                                <IconOcultSVG />
                            </TouchableOpacity>
                            <IconQUestionSVG />
                            <IconEmailSVG />
                        </ContainerIconGroup>
                    </ContainerIcons>
                    <Name>Olá, Ana Silva</Name>
                </ContainerTop>
            </Top>
            <Main>
                <ContainerMoney>
                    <TextAccount>Conta</TextAccount>
                        <TextMoney>
                            {showValue ? "R$ 3.240.221" : <MoneyBox/>}
                        </TextMoney>
                </ContainerMoney>
                <ContainerFletList>
                    <FlatList
                        keyExtractor={(item: any) => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={itens}
                        renderItem={(item: any) => <ButtonMenu item={item.item} />}
                    />
                </ContainerFletList>
                <ContainerCard>
                    <ContainerItensCard>
                        <IconCartaoSVG width={32} height={32} />
                        <TextCard>Meus Cartões</TextCard>
                    </ContainerItensCard>
                </ContainerCard>
                <ContainerFletListInfo>
                    <FlatList
                        keyExtractor={(item: any) => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={dataInfo}
                        renderItem={(item: any) => <Info item={item.item} />}
                    />
                </ContainerFletListInfo>
                <Div />
                <ContainerCreditCard>
                    <IconCartaoSVG width={32} height={32} />
                    <TextCreditCardTitle>Cartão de crédito</TextCreditCardTitle>
                    <TextCreditCard>Peça seu cartão de crédito sem anuidade e tenha mais controle da sua vida financeira.</TextCreditCard>
                    <Button>Pedir Cartão</Button>
                </ContainerCreditCard>
                <Div />
                <TextDescubra>Descubra mais</TextDescubra>
                <ContainerFletListInfo>
                    <FlatList
                        keyExtractor={(item: any) => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        data={dataInfo}
                        renderItem={(item: any) => <Portabilidade />}
                    />
                </ContainerFletListInfo>
            </Main>
            <Space />
        </Container>
    )
}
export default Home;
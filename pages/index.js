import Image from "next/image";
import styled from "styled-components";
import { useAddress, useMetamask } from "@thirdweb-dev/react";
import Dashboard from "./Dashboard";
import metamaskIcon from "../assets/metamask.png";
import svgCrypto from "../assets/ethsvg.svg"

export default function Home() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();

  return (
    <Wrapper>
      {address ? (
        <Dashboard address={address} />
      ) : (
        <WalletConnect>
          <Content>
            <Text style={{marginBottom: 0}}>
              Bienvenido a la web 3.0
            </Text>
            <Title>
            ThirdWeb Crypto Exchange
            </Title>
            <Text>
              Envía, recibe, compra y vende tus criptomonedas <br /> en la aplicación mas segura del planeta.
            </Text>
            <SubTitle>Accede con tu cuenta de MetaMask!</SubTitle>
            <Button onClick={connectWithMetamask}>
              <Image
                src={metamaskIcon}
                alt={"Metamask"}
                width={40}
                height={40}
              />
              <SubText>M E T A M A S K</SubText>
            </Button>
            <Details>
              * Para utilizar esta Dapp necesitas la versión mas reciente de un navegador <br /> como Chrome o Firefox.
            </Details>
          </Content>
          <Hero>
            <Image src={svgCrypto} alt={"Cryto-Hero"} width={550}
                height={550}/>
          </Hero>
        </WalletConnect>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 100vw;
  background-color: rgb(15 23 42);
  color: #fff;
  display: grid;
  place-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3rem;
`

const Hero = styled.div`
  margin: 0 3rem;
`

const Title = styled.h1`
  font-size: 3.5rem;
  color: rgb(99 102 241);
`
const SubTitle = styled.h3`
  font-size: 1.5rem;
`

const Text = styled.h2`
  font-size: 2rem;
`

const SubText = styled.p`
  margin: 0 15px;
`

const WalletConnect = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #282b2f;
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
  border-radius: 0.4rem;
  background-color: rgb(240 249 255);
  color: #000;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    transition: ease-in-out 0.2s;
    background-color: rgb(99 102 241);
    color: #fff;
  }
  
`;

const Details = styled.div`
  font-size: 1.2rem;
  text-align: center;
  margin-top: 1rem;
  font-weight: 500;
  color: rgb(148 163 184);
`;

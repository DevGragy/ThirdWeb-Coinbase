import styled from "styled-components";

const Header = ({ walletAddress, connecWallet }) => {
  return (
    <Wrapper>
      <Title>Assets</Title>
      <ButtonsContainer>
        <WalletLink>
          <WalletLinkTitle>Wallet Connected</WalletLinkTitle>
          <WalletAddress>
            {walletAddress.slice(0, 5)}...{walletAddress.slice(35)}
          </WalletAddress>
        </WalletLink>
        <ButtonBS>Buy / Sell</ButtonBS>
        <ButtonSR>Send / Receive</ButtonSR>
      </ButtonsContainer>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: calc(100% - 3rem);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #fff;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;
`;

const ButtonsContainer = styled.div`
  display: flex;
`;

const ButtonBS = styled.div`
  border: 1px solid #fff;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;
  background-color: rgb(99 102 241);
  color: "#fff";

  &:hover {
    cursor: pointer;
    background-color: rgb(241 245 249);;
    color: #000;
    transition: ease-out 0.2s
  }
`;

const ButtonSR = styled.div`
  border: 1px solid #fff;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;
  background-color: "#3773f5";
  color: "#fff";

  &:hover {
    cursor: pointer;
    background-color: rgb(241 245 249);
    color: #000;
    transition: ease-out 0.2s
  }
`;

const WalletLink = styled.div`
  border: 1px solid #fff;
  border-radius: 50rem;
  font-size: 1.2rem;
  margin-right: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &:hover {
    background-color: rgb(241 245 249);
    transition: ease-out 0.2s;
    color: #000;
  }
`;

const WalletLinkTitle = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color: #27ad75;
  font-weight: 600;
`;

const WalletAddress = styled.div`
  font-size: 0.8rem;
`;

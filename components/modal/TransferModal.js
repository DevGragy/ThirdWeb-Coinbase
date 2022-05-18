import { useState } from 'react'
import styled from 'styled-components'
import Transfer from './Transfer'
import CoinSelector from './CoinSelector'
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
import Receive from './Receive';

const TransferModal = ( { sanityTokens  , thirdWebTokens, walletAddress }) => {

    
    const [ action, setAction ] = useState('send')
    const [ selectedToken, setSelectedToken ] = useState(sanityTokens[0])
    const [ loading, settLoading ] = useState(true);
    const [ color, setColor] = useState("#3773f5");


    const selectedStyle = {
        color: '#3773f5'
    }

    const unselectedStyle = {
        border: '1px solid #282b2f',
    }

    const selectedModal = option => {

        switch (option) {
            case 'send':
                return <Transfer 
                    selectedToken={selectedToken}
                    setAction={setAction}
                    thirdWebTokens={thirdWebTokens}
                    walletAddress={walletAddress}
                />
            case 'receive':
                return <Receive
                    setAction={setAction}
                    selectedToken={selectedToken}
                    walletAddress={walletAddress}
                />
            case 'select':
                return <CoinSelector 
                    setAction={setAction}
                    selectedToken={selectedToken}
                    setSelectedToken={setSelectedToken}
                    sanityTokens={sanityTokens}
                    thirdWebTokens={thirdWebTokens}
                    walletAddress={walletAddress}
                />
            case 'transfering':
                return <div
                    style={{
                        width: '100%',
                        height: '10%$',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '1.5rem',
                    }}
                >
                    <h2>Transferring....</h2>
                        <BeatLoader color={color} loading={loading} css={override} size={15} />
                    </div>
            case 'transfered':
                return <h2 
                    style = {{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '2rem',
                            fontWeight: '600',
                            color: '#27ad75'
                        }}> 
                    Transer complete  
                </h2>
            default:
                return <h2>send</h2>
        }
    }


    return(
        <Wrapper>
            <Selector>
                <Option style={ action === 'send' ? selectedStyle : unselectedStyle } onClick= {() => setAction('send')}>
                    <p>Send</p>
                </Option>
                <Option style={ action === 'receive' ? selectedStyle : unselectedStyle } onClick= {() => setAction('receive')} >
                    <p>Receive</p>
                </Option>
            </Selector>
            <ModalMain>
                {selectedModal(action)}
            </ModalMain>
        </Wrapper>
    )

}
export default TransferModal

const Wrapper = styled.div`
    height: 35rem;
    width: 27rem;
    color: white;
    border: 1px solid #282b2f;
    display: flex;
    flex-direction: column;
`

const Selector = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 5rem;
`

const Option = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    font-size: 1.2rem;
    font-weight: 600;

    &: hover{
        cursor:pointer;
        background-color: #111214;
    }

`

const ModalMain = styled.div`
    padding: 1rem;
    flex: 1;
`
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
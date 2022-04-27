import '../styles/globals.css'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

function MyApp({ Component, pageProps }) {
  return(
    <ThirdwebProvider desiredChainId={ChainId.Mainnet}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp

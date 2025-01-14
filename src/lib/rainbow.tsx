import '@rainbow-me/rainbowkit/styles.css'

import { getDefaultConfig, RainbowKitProvider, Chain } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { parseEther } from 'viem'

import { sendTransaction } from '@wagmi/core'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const bsc = {
    id: 97,
    name: 'BSC Testnet',
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'tBNB'
    },
    rpcUrls: {
        default: { http: ['https://data-seed-prebsc-1-s1.bnbchain.org:8545'] }
    },
    blockExplorers: {
        default: {
            name: 'BscScan',
            url: 'https://testnet.bscscan.com',
            apiUrl: 'https://testnet.bscscan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 17422483
        }
    },
    testnet: true
} as const satisfies Chain

export const wagmiConfig = getDefaultConfig({
    appName: 'ShopcekApp',
    projectId: 'YOUR_PROJECT_ID',
    chains: [mainnet, bsc]
})

const queryClient = new QueryClient()

export function RainbowProvider({ children }: any) {
    return (
        <WagmiProvider config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider showRecentTransactions={true}>{children}</RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export async function buyWithWallet(
    beforeTransaction: CallableFunction,
    onSuccess: ({ transaction }: { transaction: string }) => void,
    ether: number
) {
    beforeTransaction()

    let result = await sendTransaction(wagmiConfig, {
        to: '0xE614FD090a5f1bD940a0ef0060a30b8159Fa5107',
        value: parseEther(String(ether))
    })

    if (result) {
        onSuccess({ transaction: result })
    }
}

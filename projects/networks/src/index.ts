require('dotenv').config({ path: require('find-config')('.env') })

interface NetworkUserConfig {
  url: string;
  chainId: number;
  accounts: string[]
}

const bscTestnet: NetworkUserConfig = {
  url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  chainId: 97,
  accounts: [process.env.KEY_TESTNET!],
}

const bscMainnet: NetworkUserConfig = {
  url: 'https://bsc-dataseed.binance.org/',
  chainId: 56,
  accounts: [process.env.KEY_MAINNET!],
}

const goerli: NetworkUserConfig = {
  url: 'https://rpc.ankr.com/eth_goerli',
  chainId: 5,
  accounts: [process.env.KEY_GOERLI!],
}

const eth: NetworkUserConfig = {
  url: 'https://eth.llamarpc.com',
  chainId: 1,
  accounts: [process.env.KEY_ETH!],
}

const core: NetworkUserConfig = {
  url: 'https://rpc-core.icecreamswap.com',
  chainId: 1116,
  accounts: [process.env.KEY_CORE!],
}

export const networks = {
  hardhat: {
    allowUnlimitedContractSize: true,
  },
  ...(process.env.KEY_TESTNET && { bscTestnet }),
  ...(process.env.KEY_MAINNET && { bscMainnet }),
  ...(process.env.KEY_GOERLI && { goerli }),
  ...(process.env.KEY_ETH && { eth }),
  ...(process.env.KEY_CORE && { core }),
  // mainnet: bscMainnet,
}
import FuseLogo from 'src/config/assets/token_fuse.svg'
import {
  EnvironmentSettings,
  ETHEREUM_LAYER,
  ETHEREUM_NETWORK,
  FEATURES,
  NetworkConfig,
  SHORT_NAME,
  WALLETS,
} from 'src/config/networks/network.d'
import { fuseBalancesHandler } from 'src/logic/safe/api/fetchTokenCurrenciesBalances'

const baseConfig: EnvironmentSettings = {
  clientGatewayUrl: 'https://safe-service.fuse.io/cgw/v1',
  txServiceUrl: 'https://safe-service.fuse.io/txs/api/v1',
  gasPrice: 1e9, // 1 Gwei TODO: add gasPriceOracles
  rpcServiceUrl: 'https://rpc.fuse.io',
  safeAppsRpcServiceUrl: 'https://rpc.fuse.io',
  networkExplorerName: 'TrustEVM Explorer',
  networkExplorerUrl: 'https://www.trustexplorer.one',
  networkExplorerApiUrl: 'https://www.trustexplorer.one',
}

const trustevmtestnet: NetworkConfig = {
  environment: {
    dev: {
      ...baseConfig,
    },
    staging: {
      ...baseConfig,
    },
    production: {
      ...baseConfig,
    },
  },
  network: {
    id: ETHEREUM_NETWORK.TRUSTEVMTESTNET,
    shortName: SHORT_NAME.TRUSTEVMTESTNET,
    backgroundColor: '#084516',
    textColor: '#FFFFFF',
    label: 'trustevm testnet',
    ethereumLayer: ETHEREUM_LAYER.L2,
    nativeCoin: {
      address: '0x0000000000000000000000000000000000000000',
      name: 'Trustevmtestnet',
      symbol: 'evm',
      decimals: 18,
      logoUri: FuseLogo,
    },
    customExchangePriceOracle: {
      exchangePriceAPI: 'https://api.fuseswap.com/api/v1/price/',
      wrappedNativeCurrencyAddress: '0x0BE9e53fd7EDaC9F859882AfdDa116645287C629',
    },
    balancesHandler: fuseBalancesHandler,
  },
  disabledWallets: [
    WALLETS.TREZOR,
    WALLETS.COINBASE,
    WALLETS.FORTMATIC,
    WALLETS.OPERA,
    WALLETS.OPERA_TOUCH,
    WALLETS.PORTIS,
    WALLETS.TORUS,
    WALLETS.TRUST,
    WALLETS.WALLET_LINK,
    WALLETS.AUTHEREUM,
    WALLETS.LATTICE,
    WALLETS.KEYSTONE,
    WALLETS.WALLET_CONNECT,
    WALLETS.LEDGER,
  ],
  disabledFeatures: [FEATURES.DOMAIN_LOOKUP, FEATURES.SPENDING_LIMIT],
}

export default trustevmtestnet

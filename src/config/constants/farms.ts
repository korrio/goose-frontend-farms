import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'SPG',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
      4: '0xDa38Ac5724502E27EcDcfB64e3cc60A48F7B2bAB',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      4: '0xda38ac5724502e27ecdcfb64e3cc60a48f7b2bab',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'SPG-BNB',
    lpAddresses: {
      97: '',
      56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
      4: '0x2f9873EbF0286Fa5edDF5d414b0490dc9c15cc8a',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
      4: '0xDc4C8a4E3380aEc9daF604FA4937094D2cd919CC', // BNB
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'SPG-BUSD',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
      4: '0x64d94b153165bb8db2af14339c8390f53bfbb397',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
      4: '0x3720E88Fbc0F3519E284Dd82b6CF6933b5da4D84', // BUSD
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms

# ANY Farm Frontend
## Instructions
1. git clone https://github.com/goosedefi/goose-frontend-farms
2. npm install
3. Modify core addresses (treat wbnb as WBNB and cake as ANY token)
- /src/config/constants/contracts.ts (masterchef / cake / mulltiCall)
4. Correct /src/config/abi/* by copy the right ones from rinkeby.etherscan.io
- cake.json 
- masterchef.json
- Multicall.json
- weth.json 
5. Modify LP and Token addresses
- /src/config/constants/farms.ts
6. Add 4 (rinkeby) to /src/config/constants/types.ts
7. Remove IFO component on /src/App.tsx
8. Modify all .env/.env.development/.env.production/ to be Rinkeby
9. yarn start
10. Check APR and Price of each pools
- Calculate APR [Line: 56] /src/view/Farms/farms.tsx
- Calculate ANY price [Line: 76] /src/state/hooks.ts


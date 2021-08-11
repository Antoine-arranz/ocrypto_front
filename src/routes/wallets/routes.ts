import Wallets from '../../containers/Wallets';

import walletPaths from './paths';
const WalletsRoutes: any = [
  {
    path: walletPaths.getWallets,
    component: Wallets,
  },
];

export default WalletsRoutes;

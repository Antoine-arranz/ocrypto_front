import Wallets from '../../containers/Wallets';
import NewWallets from '../../containers/NewWallets';

import walletPaths from './paths';
const WalletsRoutes: any = [
  {
    path: walletPaths.getWallets,
    component: Wallets,
  },
  {
    path: walletPaths.addWallets,
    component: NewWallets,
  },
];

export default WalletsRoutes;

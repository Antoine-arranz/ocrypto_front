import Wallets from '../../containers/Wallets';

import walletPaths from './paths';
const WalletsRoutes: Array<{ path: string; component: React.FC<any> }> = [
  {
    path: walletPaths.getWallets,
    component: Wallets,
  },
];

export default WalletsRoutes;

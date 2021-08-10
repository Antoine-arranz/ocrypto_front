import * as dashboard from './dashboard';
import * as user from './user';
import * as wallets from './wallets';

export default [...user.routes, ...dashboard.routes, ...wallets.routes];

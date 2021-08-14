import userMiddlewares from './user/middlewares';
import walletMiddlewares from './wallets/middlewares';
import platformMiddlewares from './platform/middlewares';
import currencyMiddlewares from './currency/middlewares';

export function apiMiddlewares({ api }: any) {
  return [
    userMiddlewares({ api }),
    walletMiddlewares({ api }),
    platformMiddlewares({ api }),
    currencyMiddlewares({ api }),
  ];
}

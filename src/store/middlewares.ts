import userMiddlewares from './user/middlewares';
import walletMiddlewares from './wallets/middlewares';

export function apiMiddlewares({ api }: any) {
  return [userMiddlewares({ api }), walletMiddlewares({ api })];
}

import userMiddlewares from './user/middlewares'

export function apiMiddlewares({api}:any) {
  return [
    userMiddlewares({api})
  ];
}

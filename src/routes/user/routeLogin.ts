import Login from '../../containers/Login';
import SignIn from '../../containers/SignIn';
import ForgottenPassword from '../../containers/ForgottenPassword';
import userPaths from './paths';
const loginRoutes = [
  {
    path: userPaths.login,
    component: Login,
  },
  {
    path: userPaths.signIn,
    component: SignIn,
  },
  {
    path: userPaths.forgottenPassword,
    component: ForgottenPassword,
  },
  { path: userPaths.validateAccount, component: Login },
];

export default loginRoutes;

import Login from "../../containers/Login";
import SignIn from "../../containers/SignIn";
import ForgottenPassword from "../../containers/ForgottenPassword";

const loginRoutes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/signIn",
    component: SignIn,
  },
  {
    path: "/forgotten-password",
    component: ForgottenPassword,
  },
];

export default loginRoutes;

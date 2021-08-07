import Login from "../../containers/Login";
import SignIn from "../../containers/SignIn";

const loginRoutes = [
  {
    path: "/",
    component: Login,
  },
  {
    path: "/signIn",
    component: SignIn,
  },
];

export default loginRoutes;

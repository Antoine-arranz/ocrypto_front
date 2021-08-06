import * as dashboard from "./dashboard";
import * as user from "./user";

export default [...user.routes, ...dashboard.routes];

import Index from "./pages/Index/Index";

import Login from "./pages/Auth/login";
import PasswordForget from "./pages/Auth/password_forget";

const routes = [
  { path: "/login", component: Login },
  { path: "/password_forget", component: PasswordForget },
  { path: "/", component: Index },
];

export default routes;

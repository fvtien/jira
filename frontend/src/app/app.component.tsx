import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwtDecode from "jwt-decode";
import setAuthToken from "./shared/utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./store/auth/auth.action";
import { setUsers } from "./store/user/user.action";
import { User } from "./shared/types/user.type";
import { getUsers, getUserByMail } from "./shared/apis/user.api";
import store from "./store";
import AuthenticatedGuard from "./shared/guards/AuthenticatedGuard";
import { PATH } from "./shared/constants/path";
import LandingPage from "./modules/landing";
import HomePage from "./modules/home";

const fetchUsers = async () => {
  const { success, data } = await getUsers();
  if (success) {
    store.dispatch(setUsers(data));
  }
};

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);

  const decoded: User = jwtDecode(token);
  getUserByMail(decoded.email).then(({ data }) => {
    store.dispatch(setCurrentUser({ ...decoded, ...data }));
    fetchUsers();

    const currentTime = Date.now() / 1000;
    if ((decoded as any).exp < currentTime) {
      store.dispatch(logoutUser() as any);
      window.location.href = "/login";
    }
  });
}

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={LandingPage} />
      <Switch>
        <AuthenticatedGuard exact path={PATH.HOME} component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;

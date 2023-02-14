import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import App from "./app";
import Dashboard from "./dashboard";
import Login from "./login";

const Pages = () => {
        return (
          <Router>
                <Route exact path="/" component={App} />
                <Route path = "/signin" component={Login} />
                <PrivateRoute path = "/dashboard" component={Dashboard} />
          </Router>
        )
}

const PrivateRoute = ({ component: Component, ...rest }) => {
        const isAuth = localStorage.getItem('is_authenticated')
       
        return (
          <Route
            {...rest}
            render={props =>
              isAuth  ? (
                <Component {...props} />
              ) : (
                <Redirect
                  to={{
                    pathname: '/signin',
                    state: { from: props.location }
                  }}
                />
              )
            }
          />
        );
      };

export default Pages;
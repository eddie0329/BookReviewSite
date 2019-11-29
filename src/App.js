import React from "react";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Error from "./pages/Error";
import AddBook from "./pages/AddBook";
import Book from "./components/Book";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function withAuth(Component) {
  return props => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token == null) {
      return <Redirect to="/signin" />;
    }
    return <Component {...props} token={token} />;
  };
}

class App extends React.Component {
  render() {
    // console.log(this.props.book);
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/book" component={withAuth(Book)} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/add" component={withAuth(AddBook)} />
          <Route exact path="/" component={withAuth(Home)} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

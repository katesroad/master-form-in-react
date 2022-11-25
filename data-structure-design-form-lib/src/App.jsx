import React, { Component } from "react";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import CustomersList from "./CustomersList";
import { Route, Switch } from "react-router";
import { HashRouter } from "react-router-dom";
import NoMatchPage from "./NoMatchPage";
import SideBar from "./SideBar";
import ProductByID from "./ProductByID";
import NewCustomer from "./InsertCustomer";
import UpdateCustomer from "./UpdateCustomer";
import Register from "./Registration";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  render() {
    return (
      <HashRouter>
        <NavBar
          isLoggedIn={this.state.isLoggedIn}
          updateIsLoggedInStatus={this.updateIsLoggedInStatus}
        />

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              {this.state.isLoggedIn ? <SideBar></SideBar> : ""}
            </div>

            <div className="col-lg-9">
              <Switch>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <Login
                      {...props}
                      updateIsLoggedInStatus={this.updateIsLoggedInStatus}
                    />
                  )}
                />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/customers" exact component={CustomersList} />
                <Route path="/cart" exact component={ShoppingCart} />
                <Route path="/product/:id" component={ProductByID} />
                <Route path="/new-customer" exact component={NewCustomer} />
                <Route
                  path="/edit-customer/:id"
                  exact
                  component={UpdateCustomer}
                />
                <Route path="/register" component={Register} />
                <Route path="*" component={NoMatchPage} />
              </Switch>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }

  //This method can be called by child components to update isLoggedIn property of the state
  updateIsLoggedInStatus = (status) => {
    this.setState({ isLoggedIn: status });
  };
}

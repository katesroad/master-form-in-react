import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
          <a className="navbar-brand" href="/#">
            eCommerce
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {!this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link"
                    activeClassName="active"
                    exact={true}
                  >
                    Login
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {!this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className="nav-link"
                    activeClassName="active"
                    exact={true}
                  >
                    Register
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    to="/dashboard"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Dashboard
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    to="/customers"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Customers
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {this.props.isLoggedIn ? (
                <li className="nav-item">
                  <NavLink
                    to="/cart"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Shopping Cart
                  </NavLink>
                </li>
              ) : (
                ""
              )}

              {this.props.isLoggedIn ? (
                <li className="nav-item">
                  <a
                    href="/#"
                    className="nav-link"
                    onClick={this.onLogoutClick}
                  >
                    Logout
                  </a>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }

  //Executes when the user clicks on the Logout link
  onLogoutClick = (event) => {
    //prevent the page refresh when the user clicks on Logout link
    event.preventDefault();

    //update isLoggedInStatus as false
    this.props.updateIsLoggedInStatus(false);

    //navigate login component
    document.location.hash = "/";
  };
}

export default NavBar;

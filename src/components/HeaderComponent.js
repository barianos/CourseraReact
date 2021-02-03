import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Navbar dark>
            <div className="container">
              <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
          </Navbar>
          <Jumbotron>
            <div className="container">
              <div className="row row-header">
                <div clasName="col-12 col-sm-6">
                  <h1>Ristorante Con Fusion</h1>
                  <p>
                    We take inspiration from from the Worlds best cuisines and
                    create a unique fusion experience. Our lipsmacking creations
                    will tickle your cullinary senses!
                  </p>
                </div>
              </div>
            </div>
          </Jumbotron>
        </React.Fragment>
      </div>
    );
  }
}
export default Header;

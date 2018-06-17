import React from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";
export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify!</h1>
    <div>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Home
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Add Expense
      </NavLink>
    </div>
    <button onClick={startLogout}>Log out</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});
export default connect(
  undefined,
  mapDispatchToProps
)(Header);

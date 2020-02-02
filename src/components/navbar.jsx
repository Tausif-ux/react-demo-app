import React from "react";
import SearchForm from "./searchForm";

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="logo.png" alt="Logo" className="header__logo" />
          </a>

          <SearchForm />
        </nav>
    );
};

export default NavBar;
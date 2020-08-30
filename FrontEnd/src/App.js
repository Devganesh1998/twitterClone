import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Routing/router";
import SideMenu from "./Components/HomeComponents/SideMenu";
import styles from "./Styles/Home.module.css";
import { connect } from "react-redux";
import { logoutUser } from "./Redux/AuthReducer/action";

function App({logout}) {
  return (
    <BrowserRouter>
      <div className={styles.homeCont}>
        <div className={styles.sideMenuCont}>
          <SideMenu logout={logout}></SideMenu>
        </div>
        <div className={styles.routerCont}>
          <Router />
        </div>
      </div>
    </BrowserRouter>
  );
}


const mapStateToProps = (state) => {
  return {
    data: state.data,
    isauth: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect( mapStateToProps, mapDispatchToProps)(App);

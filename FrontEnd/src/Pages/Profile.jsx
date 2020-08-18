import React from "react";
import { connect } from "react-redux";
import SideMenu from "../Components/HomeComponents/SideMenu";
import styles from "../Styles/Home.module.css";
import { logoutUser } from "../Redux/AuthReducer/action";

const Profile = (props) => {
  return (
    <div className={styles.homeCont}>
      <div className={styles.sideMenuCont}>
        <SideMenu logout={props.logout}></SideMenu>
      </div>
      <div>Profile</div>
    </div>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

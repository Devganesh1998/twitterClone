import React from "react";
import SideMenu from "../Components/HomeComponents/SideMenu";
import styles from "../Styles/Home.module.css";
import { connect } from "react-redux";
import { logoutUser } from "../Redux/AuthReducer/action";
import { Route } from "react-router-dom";
import NewsFeed from "./NewsFeed";
import Profile from "./Profile";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { logout } = this.props;
    return (
      <div className={styles.homeCont}>
        <div className={styles.sideMenuCont}>
          <SideMenu logout={logout}></SideMenu>
        </div>
        <div>
          <Route path="/" exact component={NewsFeed}></Route>
          <Route path="/profile" component={Profile}></Route>
        </div>
      </div>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);

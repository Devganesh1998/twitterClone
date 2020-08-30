import React from "react";
import { getAllProfiles } from "../Redux/ProfileReducer/action";
import { connect } from "react-redux";
import UserCards from "../Components/HomeComponents/UserCards";
import { FollowUser, unFollowUser } from "../Redux/ProfileReducer/action";
import styles from "../Styles/Home.module.css"

class ListAllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const {
      allProfiles,
      FollowUser,
      unFollowUser,
      email,
      followUserLoading,
      unfollowUserLoading,
    } = this.props;
    return (
      <div className={styles.listUsersCont}>
        {allProfiles &&
          allProfiles.map((Element, index) => (
            <UserCards
              key={Element.id}
              FollowUser={FollowUser}
              unFollowUser={unFollowUser}
              followUserSending={followUserLoading[index]}
              unfollowUserSending={unfollowUserLoading[index]}
              currEmail={email}
              {...Element}
            />
          ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allProfiles: state.profile.allProfiles,
    followUserLoading: state.profile.followUserLoading,
    unfollowUserLoading: state.profile.unfollowUserLoading,
    email: state.auth.email,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(getAllProfiles()),
    FollowUser: (payload) => dispatch(FollowUser(payload)),
    unFollowUser: (payload) => dispatch(unFollowUser(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListAllUsers);

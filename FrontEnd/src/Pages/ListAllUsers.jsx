import React from "react";
import { getAllProfiles } from "../Redux/ProfileReducer/action";
import { connect } from "react-redux";
import UserCards from "../Components/HomeComponents/UserCards"
import { FollowUser } from "../Redux/TweetReducer/action";

class ListAllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const { allProfiles, FollowUser } = this.props;
    return (
      <div>
        {allProfiles &&
          allProfiles.map((Element) => <UserCards FollowUser={FollowUser} {...Element} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allProfiles: state.profile.allProfiles,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => dispatch(getAllProfiles()),
    FollowUser: () => dispatch(FollowUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListAllUsers);

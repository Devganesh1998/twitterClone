import React from "react";
import { getAllProfiles } from "../Redux/ProfileReducer/action";
import { connect } from "react-redux";
import UserCards from "../Components/HomeComponents/UserCards";
import { FollowUser, unFollowUser } from "../Redux/TweetReducer/action";

class ListAllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getAllUsers();
  }

  render() {
    const { allProfiles, FollowUser, unFollowUser, email } = this.props;
    return (
      <div>
        {allProfiles &&
          allProfiles.map((Element) => (
            <UserCards
              key={Element.id}
              FollowUser={FollowUser}
              unFollowUser={unFollowUser}
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

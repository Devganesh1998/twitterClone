import React from "react";
import { connect } from "react-redux";
import styles from "../Styles/Home.module.css";
import { fetchUserTweets, getProfile } from "../Redux/ProfileReducer/action";
import TweetCard from "../Components/HomeComponents/TweetCard";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { email, getProfile, fetchUserTweets } = this.props;
    getProfile({ email: email });
    fetchUserTweets({ email: email });
  }

  render() {
    const { userProfile, userTweets } = this.props;
    return (
      <div>
        <h3 style={{ margin: "auto" }}>My Profile</h3>
        <div>
          {userProfile &&
            Object.keys(userProfile).map((key) => {
              return (
                <p>
                  {key} : {userProfile[key]}
                </p>
              );
            })}
        </div>
        {userTweets &&
          userTweets.map((element) => {
            return <TweetCard {...element} />;
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.profile.userProfile,
  userTweets: state.profile.userTweets,
  email: state.auth.email,
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserTweets: (payload) => dispatch(fetchUserTweets(payload)),
    getProfile: (payload) => dispatch(getProfile(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

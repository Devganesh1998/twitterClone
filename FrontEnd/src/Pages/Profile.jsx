import React from "react";
import { connect } from "react-redux";
import styles from "../Styles/Home.module.css";
import { fetchUserTweets, getProfile } from "../Redux/ProfileReducer/action";
import { SelflikeTweet } from "../Redux/ProfileReducer/action";
import TweetCard from "../Components/HomeComponents/TweetCard";
import UserCard from "../Components/HomeComponents/UserCards";
import homeStyles from "../Styles/Home.module.css";

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
    const {
      userProfile,
      userTweets,
      likeTweet,
      email,
      userTweetsLoading,
    } = this.props;
    return (
      <div className={homeStyles.profileCont}>
        <h3 style={{ margin: "auto" }}>My Profile</h3>
        <div className={styles.profileCard}>
          {userProfile ? (
            <UserCard isFollowActionAvail={false} {...userProfile} />
          ) : (
            ""
          )}
        </div>
        <div className={homeStyles.userTweetsCont}>
          {userTweets &&
            userTweets.map((element, index) => {
              return (
                <TweetCard
                  likeTweetSending={userTweetsLoading[index]}
                  likeTweet={likeTweet}
                  email={email}
                  {...element}
                  key={index}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userProfile: state.profile.userProfile,
  userTweets: state.profile.userTweets,
  userTweetsLoading: state.profile.userTweetsLoading,
  email: state.auth.email,
});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserTweets: (payload) => dispatch(fetchUserTweets(payload)),
    getProfile: (payload) => dispatch(getProfile(payload)),
    likeTweet: (payload) => dispatch(SelflikeTweet(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

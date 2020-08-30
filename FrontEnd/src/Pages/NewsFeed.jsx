import React from "react";
import { connect } from "react-redux";
import {
  fetchAllTweets,
  addNewTweet,
  likeTweet,
} from "../Redux/TweetReducer/action";
import AddTweet from "../Components/HomeComponents/AddTweet";
import TweetCard from "../Components/HomeComponents/TweetCard";
import { Button } from "antd";
import { Link } from "react-router-dom";
import styles from "../Styles/Home.module.css";

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  componentDidMount() {
    const { fetchAllTweets, email } = this.props;
    fetchAllTweets({
      page: 1,
      email: email,
    });
  }

  handleNextPage = () => {
    const { email, fetchAllTweets } = this.props;
    fetchAllTweets({ page: this.state.page + 1, email: email });
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const {
      tweets,
      likeTweet,
      email,
      likeTweetLoading,
      addTweetSending,
      isGetAllTweetsSending,
    } = this.props;
    return (
      <div className={styles.newsFeedCont}>
        <div className={styles.addTweetCont}>
          <AddTweet addTweetSending={addTweetSending} {...this.props} />
        </div>
        <div className={styles.tweetsParentCont}>
          {tweets.length === 0 ? (
            <div>
              <p>
                No more Tweets found, Please Follow people to view more Tweets
              </p>
              <Link to="/listAllUsers">Click Here, to find more people</Link>
            </div>
          ) : (
            <p></p>
          )}
          <div className={styles.newsFeedTweetsCont}>
            {tweets &&
              tweets.map((element, index) => {
                return (
                  <TweetCard
                    likeTweetSending={likeTweetLoading[index]}
                    likeTweet={likeTweet}
                    email={email}
                    {...element}
                    key={element.id}
                  />
                );
              })}
          </div>
          {tweets.length > 0 ? (
            <Button
              type="primary"
              style={{ margin: "20px" }}
              onClick={this.handleNextPage}
              loading={isGetAllTweetsSending}
            >
              Load More
            </Button>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweet.tweets,
    likeTweetLoading: state.tweet.likeTweetLoading,
    addTweetSending: state.tweet.addTweetSending,
    isGetAllTweetsSending: state.tweet.isGetAllTweetsSending,
    email: state.auth.email,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTweets: (payload) => dispatch(fetchAllTweets(payload)),
    addNewTweet: (payload) => dispatch(addNewTweet(payload)),
    likeTweet: (payload) => dispatch(likeTweet(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

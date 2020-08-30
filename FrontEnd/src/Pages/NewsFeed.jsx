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
    console.log("this.state.page", this.state.page);
    const { email, fetchAllTweets } = this.props;
    fetchAllTweets({ page: this.state.page + 1, email: email });
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const {
      tweets,
      likeTweet,
      email,
      likeTweetSending,
      addTweetSending,
      isGetAllTweetsSending,
    } = this.props;
    return (
      <React.Fragment>
        <div>
          <AddTweet addTweetSending={addTweetSending} {...this.props} />
        </div>
        <div>
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
          {tweets &&
            tweets.map((element) => {
              return (
                <TweetCard
                  likeTweetSending={likeTweetSending}
                  likeTweet={likeTweet}
                  email={email}
                  {...element}
                  key={element.id}
                />
              );
            })}
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
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweet.tweets,
    likeTweetSending: state.tweet.likeTweetSending,
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

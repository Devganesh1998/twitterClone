import React from "react";
import { connect } from "react-redux";
import { fetchAllTweets, addNewTweet, likeTweet } from "../Redux/TweetReducer/action";
import AddTweet from "../Components/HomeComponents/AddTweet";
import TweetCard from "../Components/HomeComponents/TweetCard";
import { Button } from "antd";

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
    const { tweets, likeTweet, email, likeTweetSending } = this.props;
    return (
      <React.Fragment>
        <div>
          <AddTweet {...this.props} />
        </div>
        <div>
          {tweets &&
            tweets.map((element) => {
              return <TweetCard likeTweetSending={likeTweetSending} likeTweet={likeTweet} email={email} {...element} key={element.id}/>;
            })}
          <Button
            type="primary"
            style={{ margin: "20px" }}
            onClick={this.handleNextPage}
          >
            Load More
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweet.tweets,
    likeTweetSending: state.tweet.likeTweetSending,
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

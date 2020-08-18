import React from "react";
import { connect } from "react-redux";
import {
  fetchAllTweets,
  addNewTweet,
  FollowUser,
} from "../Redux/TweetReducer/action";
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
    const { fetchAllTweets } = this.props;
    fetchAllTweets({
      page: 1,
    });
  }

  handleNextPage = () => {
    console.log("this.state.page", this.state.page);
    this.props.fetchAllTweets({ page: this.state.page + 1 });
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { tweets, FollowUser } = this.props;
    return (
      <React.Fragment>
        <div>
          <AddTweet {...this.props} />
        </div>
        <div>
          {tweets &&
            tweets.map((element) => {
              return <TweetCard FollowUser={FollowUser} {...element} />;
            })}
          <Button type="primary" style={{margin: "20px"}} onClick={this.handleNextPage}>
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
    email: state.auth.email,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTweets: (payload) => dispatch(fetchAllTweets(payload)),
    addNewTweet: (payload) => dispatch(addNewTweet(payload)),
    FollowUser: (payload) => dispatch(FollowUser(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);

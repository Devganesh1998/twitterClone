import React from "react";
import { Card, Button } from "antd";
import { LikeOutlined } from "@ant-design/icons";
const { Meta } = Card;

export default class TweetCard extends React.PureComponent {
  state = {
    src: this.props.profileImgUrl,
  };

  handleLikeTweet = () => {
    const { id, email, likeTweet } = this.props;
    likeTweet({
      tweetId: id,
      likedUserMail: email,
    });
  };

  handleInvalidImg = () => {
    this.setState({
      src:
        "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
    });
  };

  render() {
    const {
      title,
      description,
      likes,
      createdAt,
      userTag,
      followingCount,
      followersCount,
      likeTweetSending,
    } = this.props;
    const { src } = this.state;
    return (
      <Card
        style={{width: "350px"}}
        hoverable
        cover={
          <div
            style={{
              display: "flex",
              padding: "10px",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundImage:
                "url('https://lh3.googleusercontent.com/fXWKkS5OcyOPZimNU1_lCdOAESs-Hgy53TikRH7cofRLmc4W5HOZySqU6-S7_biQjYM')",
              backgroundSize: "auto",
            }}
          >
            <img
              alt="ProgileImg"
              src={src}
              style={{ width: "80px", height: "80px", borderRadius: "7px" }}
              onError={this.handleInvalidImg}
            />
            <h3>{userTag}</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h5>{followersCount} Followers</h5>
              <h5>{followingCount} Following</h5>
            </div>
          </div>
        }
        actions={[
          <Button
            type="primary"
            shape="round"
            icon={<LikeOutlined />}
            size="large"
            loading={likeTweetSending}
            onClick={this.handleLikeTweet}
            disabled={likeTweetSending}
          >
            {likes} Likes
          </Button>,
        ]}
      >
        <Meta title={title} description={description} />
        <p style={{ marginTop: "20px" }}>Tweeted At : {createdAt}</p>
      </Card>
    );
  }
}

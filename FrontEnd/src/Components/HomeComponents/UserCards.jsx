import React from "react";
import { Card, Button } from "antd";
import { UserDeleteOutlined, UserAddOutlined } from "@ant-design/icons";

const { Meta } = Card;

export default class TweetCard extends React.PureComponent {
  state = {
    src: this.props.profileImgUrl,
  };

  handleInvalidImg = () => {
    this.setState({
      src:
        "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",
    });
  };

  handleFollow = () => {
    const { FollowUser, currEmail, id } = this.props;
    const payload = { email: currEmail, parentId: id };
    console.log(payload);
    FollowUser(payload);
  };

  handleUnFollow = () => {
    const { currEmail, id, unFollowUser } = this.props;
    const payload = { email: currEmail, parentId: id };
    console.log(payload);
    unFollowUser(payload);
  };

  render() {
    console.log("this.props", this.props);
    let {
      name,
      location,
      userTag,
      age,
      description,
      email,
      mobile,
      tweetCount,
      followersCount,
      followingCount,
      joined,
      dob,
      isFollowing,
      posterImgUrl,
      isFollowActionAvail = true,
    } = this.props;
    const { src } = this.state;

    return (
      <Card
        style={{ width: "400px" }}
        hoverable
        cover={
          <div
            style={{
              display: "flex",
              padding: "10px",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundImage: `url(${posterImgUrl})`,
              backgroundSize: "auto",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "darken",
              backgroundPosition: "50%",
            }}
          >
            <img
              alt="ProgileImg"
              src={src}
              style={{ width: "200px", height: "200px", borderRadius: "10px" }}
              onError={this.handleInvalidImg}
            />
          </div>
        }
        actions={[
          <div>
            {isFollowActionAvail && isFollowActionAvail ? (
              <div>
                {" "}
                {isFollowing ? (
                  <Button
                    type="primary"
                    shape="round"
                    icon={<UserDeleteOutlined />}
                    size="large"
                    onClick={this.handleUnFollow}
                  >
                    UnFollow
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    shape="round"
                    icon={<UserAddOutlined />}
                    size="large"
                    onClick={this.handleFollow}
                  >
                    Follow
                  </Button>
                )}{" "}
              </div>
            ) : (
              <div></div>
            )}
          </div>,
        ]}
      >
        <Meta title={userTag} description={<h4>About me : {description}</h4>} />
        <p>Name : {name}</p>
        <p>Location : {location}</p>
        <p>Age : {age}</p>
        <p>email : {email}</p>
        <p>Mobile : {mobile}</p>
        <p>TweetCount : {tweetCount}</p>
        <p>FollowersCount : {followersCount}</p>
        <p>FollowingCount : {followingCount}</p>
        <p>Joined : {joined}</p>
        <p>Date of Birth : {dob}</p>
      </Card>
    );
  }
}

import React from "react";
import { Card, Button } from "antd";
import { UserDeleteOutlined, UserAddOutlined } from "@ant-design/icons";

const { Meta } = Card;

const TweetCard = (props) => {
  const {
    id,
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
    profileImgUrl,
    posterImgUrl,
    currEmail,
  } = props;

  const handleFollow = () => {
    const payload = { email: currEmail, parentId: id };
    console.log(payload);
    props.FollowUser(payload);
  };
  const handleUnFollow = () => {
    const payload = { email: currEmail, parentId: id };
    console.log(payload);
    props.unFollowUser(payload);
  };
  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          style={{margin: "auto", marginTop: "10px",height: "200px", width: "200px"}}
          src="https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"
        />
      }
      actions={[
        <div>
          {isFollowing ? (
            <Button
              type="primary"
              shape="round"
              icon={<UserDeleteOutlined />}
              size="large"
              onClick={handleUnFollow}
            >
              UnFollow
            </Button>
          ) : (
            <Button
              type="primary"
              shape="round"
              icon={<UserAddOutlined />}
              size="large"
              onClick={handleFollow}
            >
              Follow
            </Button>
          )}
        </div>,
      ]}
    >
      <Meta title={userTag} description={description} />
      <p>name : {name}</p>
      <p>Location : {location}</p>
      <p>age : {age}</p>
      <p>email : {email}</p>
      <p>mobile : {mobile}</p>
      <p>tweetCount : {tweetCount}</p>
      <p>followersCount : {followersCount}</p>
      <p>followingCount : {followingCount}</p>
      <p>Joined : {joined}</p>
      <p>Date of Birth : {dob}</p>
      <p>Profile Img url : {profileImgUrl}</p>
      <p>Poster Img url : {posterImgUrl}</p>
    </Card>
  );
};

export default TweetCard;

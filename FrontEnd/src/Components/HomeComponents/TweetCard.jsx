import React from "react";
import { Card, Button } from "antd";
import { LikeOutlined } from "@ant-design/icons";

const { Meta } = Card;

const TweetCard = ({
  title,
  description,
  likes,
  createdAt,
  email,
  likeTweet,
  id,
}) => {
  const handleLikeTweet = () => {
    likeTweet({
      tweetId: id,
      likedUserMail: email,
    });
  };

  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src="https://lh3.googleusercontent.com/fXWKkS5OcyOPZimNU1_lCdOAESs-Hgy53TikRH7cofRLmc4W5HOZySqU6-S7_biQjYM"
        />
      }
      actions={[
        <Button
          type="primary"
          shape="round"
          icon={<LikeOutlined />}
          size="large"
          onClick={handleLikeTweet}
        >
          {likes} Likes
        </Button>,
      ]}
    >
      <Meta title={title} description={description} />
      <p>Created At : {createdAt}</p>
    </Card>
  );
};

export default TweetCard;

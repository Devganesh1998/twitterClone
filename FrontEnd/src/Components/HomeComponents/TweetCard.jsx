import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const TweetCard = ({ title, description, likes, createdAt, userId, FollowUser }) => {
    const handleFollow = () => {
        FollowUser(userId);
    }
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
        <p>Like</p>,
        <p onClick={handleFollow}>Follow</p>,
        <p>UnFollow</p>,
      ]}
    >
      <Meta title={title} description={description} />
      <p>Likes : {likes}</p>
      <p>Created At : {createdAt}</p>
    </Card>
  );
};

export default TweetCard;

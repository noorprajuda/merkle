import React from "react";
import Card from "../components/Card";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      {posts.map((post, index) => {
        return (
          <>
            <Card user={post} key={index} className="list-group-item" />
          </>
        );
      })}
    </>
  );
};

export default Posts;

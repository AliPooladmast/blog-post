import React from "react";
import SubPost from "./SubPost";

const PostDetail = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <SubPost post={post} />
        </div>

        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
      </div>
    </div>
  );
};

export default PostDetail;

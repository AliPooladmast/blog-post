import React from "react";
import moment from "moment/moment";

const SubPost = ({ post }) => {
  return (
    <>
      <div className="flex items-center justify-center mb-0 w-auto mr-8">
        <img
          src={post.author.photo.url}
          alt={post.author.name}
          height="30px"
          width="30px"
          className="align-middle rounded-full"
        />
        <p className="inline align-middle text-gray-700 ml-2 text-lg">
          {post.author.name}
        </p>
      </div>

      <div className="font-medium text-gray-700 min-w-fit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline mr-2 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>

        <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
      </div>
    </>
  );
};

export default SubPost;

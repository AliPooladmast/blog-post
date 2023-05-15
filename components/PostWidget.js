import { getRecentPosts, getSimilarPosts } from "../services";
import React, { useEffect, useState } from "react";

const PostWidget = ({ slug, categories }) => {
  const [relatedPost, setRelatedPost] = useState([]);

  useEffect(() => {
    getWidgetPosts();
  }, []);

  const getWidgetPosts = async () => {
    if (slug) {
      const result = await getSimilarPosts(slug, categories);
      setRelatedPost(result);
    } else {
      const result = await getRecentPosts();
      setRelatedPost(result);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>

      {relatedPost.map((post) => (
        <div className="flex items-center w-full mb-4">
          <div className="w-16 flex-none">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              width="60px"
              height="60px"
              className="align-middle rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;

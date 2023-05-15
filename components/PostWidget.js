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
    </div>
  );
};

export default PostWidget;

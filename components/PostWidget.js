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

  return <div>PostWidget</div>;
};

export default PostWidget;

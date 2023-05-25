import { getComments } from "@/services";
import React, { useEffect, useState } from "react";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentData();
  }, []);

  const getCommentData = async () => {
    const result = await getComments(slug);
    setComments(result);
  };

  return <div>Comments</div>;
};

export default Comments;

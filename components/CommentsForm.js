import React, { useRef, useState } from "react";

const CommentsForm = () => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(true);
  const comment = useRef();
  const name = useRef();
  const email = useRef();
  const storeData = useRef();

  const handleCommentSubmission = () => {
    setError(false);

    const comment = comment.current.value;
    const name = name.current.value;
    const email = email.current.value;

    if (!comment || !name || !email) {
      setError(false);
      return;
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-8">CommentsForm</h3>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={comment}
          name="comment"
          placeholder="Comment"
          className="bg-gray-100 p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 text-gray-700"
        ></textarea>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          ref={name}
          type="text"
          name="name"
          placeholder="Name"
          className="bg-gray-100 py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 text-gray-700"
        />
        <input
          ref={email}
          type="text"
          name="email"
          placeholder="Email"
          className="bg-gray-100 py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 text-gray-700"
        />
      </div>

      {error && <p className="text-xs text-red-500">All fields are required</p>}

      <div className="mt-8">
        <button
          onClick={handleCommentSubmission}
          className="bg-pink-600 text-lg rounded-full text-white px-8 py-3 inline-block cursor-pointer transition duration-500 ease hover:bg-indigo-900"
        >
          Post Comment
        </button>
      </div>

      {showSuccessMessage && (
        <span className="text-xl float-right font-semibold mt-3 text-green-500">
          Comment submitted for the review
        </span>
      )}
    </div>
  );
};

export default CommentsForm;

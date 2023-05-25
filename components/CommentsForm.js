import { submitComment } from "@/services";
import React, { useEffect, useRef, useState } from "react";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmission = async () => {
    setError(false);

    const comment = commentEl.current.value;
    const name = nameEl.current.value;
    const email = emailEl.current.value;
    const storeData = storeDataEl.current.checked;

    if (!comment || !name || !email) {
      setError(false);
      return;
    }

    const commentObject = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    try {
      const response = await submitComment(commentObject);
      if (response) {
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-8">CommentsForm</h3>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea
          ref={commentEl}
          name="comment"
          placeholder="Comment"
          className="bg-gray-100 p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 text-gray-700"
        ></textarea>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          ref={nameEl}
          type="text"
          name="name"
          placeholder="Name"
          className="bg-gray-100 py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 text-gray-700"
        />
        <input
          ref={emailEl}
          type="text"
          name="email"
          placeholder="Email"
          className="bg-gray-100 py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 text-gray-700"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            type="checkbox"
            ref={storeDataEl}
            id="storeData"
            name="storeData"
            defaultValue={true}
          />
          <label
            htmlFor="storeData"
            className="text-gray-500 cursor-pointer ml-2"
          >
            Save my e-mail and name for the next time I comment
          </label>
        </div>
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

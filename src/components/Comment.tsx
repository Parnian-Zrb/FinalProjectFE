import React from "react";
import "./Comment.css";

interface Comment {
  name: string;
  email: string;
  text: string;
}

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <div className="commentSection">
      <ul className="commentList">
        {comments.map((comment, index) => (
          <li key={index} className="commentItem">
            <h3>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
      <form className="commentForm">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="commentFormInput"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="commentFormInput"
        />
        <textarea
          name="text"
          placeholder="Your Comment"
          className="commentFormTextarea"
        />
        <button type="submit" className="commentFormSubmit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentSection;

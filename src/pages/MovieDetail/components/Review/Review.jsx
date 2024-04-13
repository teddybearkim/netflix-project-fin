import React, { useState } from "react";
import "./Review.style.css";

const Review = ({ review }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <h5 className="mt-4 review-author">{review.author}</h5>
      <p className={`review-text-box ${expanded ? "expanded" : "fold"}`}>
        {review.content}
      </p>
      <div className="button">
        <button
          className="more-button"
          onClick={() => setExpanded(!expanded)}
          disabled={review.content.length < 800}
          style={{ display: review.content.length < 800 ? 'none' : 'block' }}
        >
          {review.content.length > 800 && (expanded ? "접기" : "더보기")}
        </button>
      </div>
    </div>
  );
};

export default Review;

import React, { useEffect, useState } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/api/google-reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  return (
    <div>
      <h2>Google Reviews</h2>
      {reviews.length === 0 ? (
        <p>Loading reviews...</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index}>
            <p><strong>{review.author_name}</strong></p>
            <p>Rating: {review.rating}</p>
            <p>{review.text}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Reviews;

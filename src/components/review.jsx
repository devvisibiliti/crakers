import React, { useEffect, useState } from 'react';

function StarRating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-5 h-5 inline-block ${
          i <= rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.973c.3.92-.755 1.688-1.538 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.783.57-1.838-.197-1.538-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.037 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
      </svg>
    );
  }

  return <div>{stars}</div>;
}

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/google-reviews')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch reviews');
        return res.json();
      })
      .then(data => {
        setReviews(data || []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Google Reviews</h2>

      <div
        className="flex space-x-4 overflow-x-auto
                   md:flex-row md:space-x-4
                   flex-col md:overflow-x-visible"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {reviews.length === 0 ? (
          <p>No reviews found.</p>
        ) : (
          reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 p-4 border rounded shadow-md
                         scroll-snap-align-start mb-4 md:mb-0"
            >
              <p className="font-semibold">{review.author_name}</p>
              <StarRating rating={review.rating} />
              <p className="mt-2">{review.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

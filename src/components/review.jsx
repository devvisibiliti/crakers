import React, { useEffect, useState, useRef } from 'react';

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const intervalRef = useRef();

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

  useEffect(() => {
    if (reviews.length === 0) return;
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [reviews]);

  function goPrev() {
    clearInterval(intervalRef.current);
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  }

  function goNext() {
    clearInterval(intervalRef.current);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error}</p>;
  if (reviews.length === 0) return <p>No reviews found.</p>;

  // Show 3 reviews at a time, starting at currentIndex
  const visibleReviews = [];
  for (let i = 0; i < 3; i++) {
    visibleReviews.push(reviews[(currentIndex + i) % reviews.length]);
  }

  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Google Reviews</h2>

      {/* Desktop carousel */}
      <div className="hidden md:flex relative items-center justify-center space-x-6">
        {/* Left arrow */}
        <button
          onClick={goPrev}
          className="absolute left-0 z-10 p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          aria-label="Previous Reviews"
        >
          &#8592;
        </button>

        {/* Review cards */}
        {visibleReviews.map((review, index) => (
          <div
            key={index}
            className="w-1/3 p-6 border rounded shadow-md bg-white flex flex-col h-[320px]"
          >
            <p className="font-semibold">{review.author_name}</p>
            <StarRating rating={review.rating} />
            <div className="mt-2 overflow-y-auto flex-1 pr-2">
              <p>{review.text}</p>
            </div>
          </div>
        ))}

        {/* Right arrow */}
        <button
          onClick={goNext}
          className="absolute right-0 z-10 p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          aria-label="Next Reviews"
        >
          &#8594;
        </button>
      </div>

      {/* Mobile carousel: show only one review at a time with arrows */}
      <div className="md:hidden relative flex items-center justify-center">
        {/* Left arrow */}
        <button
          onClick={goPrev}
          className="absolute left-0 z-10 p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          aria-label="Previous Review"
        >
          &#8592;
        </button>

        {/* Single review card */}
        <div className="p-4 border rounded shadow-md bg-white flex flex-col w-full mx-8">
          <p className="font-semibold">{reviews[currentIndex].author_name}</p>
          <StarRating rating={reviews[currentIndex].rating} />
          <div className="mt-2">
            <p>{reviews[currentIndex].text}</p>
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={goNext}
          className="absolute right-0 z-10 p-3 bg-gray-200 rounded-full hover:bg-gray-300"
          aria-label="Next Review"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

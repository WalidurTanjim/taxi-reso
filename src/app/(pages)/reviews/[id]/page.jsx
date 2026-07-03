// components/ReviewCard.jsx

import Image from 'next/image';

const ReviewCard = ({ review }) => {
  const { user, email, photo, rating, review: reviewText, likes, date } = review;

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  // Render stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-200">
      {/* Header - User Info */}
      <div className="flex items-start gap-4 mb-4">
        {/* Avatar */}
        <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
          <Image
            src={photo}
            alt={user}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>

        {/* User Details */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h4 className="text-sm font-semibold text-gray-900 truncate">
                {user}
              </h4>
              <p className="text-xs text-gray-500 truncate">
                {email}
              </p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {formatDate(date)}
            </span>
          </div>

          {/* Rating Stars */}
          <div className="flex items-center gap-1 mt-1">
            {renderStars(rating)}
            <span className="text-xs text-gray-500 ml-1">
              ({rating}/5)
            </span>
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-sm text-gray-700 leading-relaxed mb-4">
        {reviewText}
      </p>

      {/* Footer - Likes */}
      <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span className="text-xs text-gray-500">
          {likes.length} {likes.length === 1 ? 'like' : 'likes'}
        </span>
        
        {/* Show first 2 likers */}
        {likes.length > 0 && (
          <span className="text-xs text-gray-400 ml-1">
            by {likes.slice(0, 2).join(', ')}
            {likes.length > 2 && ` and ${likes.length - 2} more`}
          </span>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
// components/FoodCard.jsx
import Image from 'next/image';
import Link from 'next/link';

const FoodCard = async({ food }) => {
  const { id, title, foodImg, price, category } = food;

  return (
    <div className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-50">
        <Image
          src={foodImg}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-sm">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-1 mb-1">
          {title}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg font-semibold text-gray-900">
            ${price}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-gray-100">
          {/* Add to Cart */}
          <button 
            className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-gray-900 hover:bg-gray-800 text-white rounded-md transition-colors duration-200 text-sm font-medium"
            aria-label="Add to cart"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
          </button>

          {/* View Details */}
          <Link href={`/foods/${id}`}><button 
            className="flex-1 flex items-center justify-center py-2 px-3 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 rounded-md transition-colors duration-200"
            aria-label="View details"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
              />
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
              />
            </svg>
          </button></Link>

          {/* Wishlist */}
          <button 
            className="flex-1 flex items-center justify-center py-2 px-3 border border-gray-300 hover:border-red-400 text-gray-500 hover:text-red-500 rounded-md transition-colors duration-200"
            aria-label="Add to wishlist"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
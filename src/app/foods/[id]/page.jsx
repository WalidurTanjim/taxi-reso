import Image from 'next/image';
import Link from 'next/link';

const getFoodById = async(id) => {
     try{
          const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`);
          const data = await res.json();
          return data.details || {};
     }catch(err) {
          console.error(err)
          return null
     }
}

export default async function FoodDetailsPage({ params }) {
  const { id } = await params;
  const food = await getFoodById(id);

  return (
      <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <Link 
          href="/foods" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm"
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18" 
            />
          </svg>
          Back
        </Link>
      </div>

      {/* Food Details */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
          {/* Image */}
          <div className="relative h-96 w-full bg-gray-100">
            <Image
              src={food.foodImg}
              alt={food.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Category Badge */}
            <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-gray-700">
              {food.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Title and Price */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                {food.title}
              </h1>
              <span className="text-2xl md:text-3xl font-bold text-gray-900">
                ${food.price}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-gray-100">
              <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center gap-2">
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
                Add to Cart
              </button>
              
              {/* <button className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 font-medium py-3 px-6 rounded-md transition-colors duration-200 flex items-center justify-center gap-2">
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
                View Details
              </button> */}
              
              <button className="px-6 py-3 border border-gray-300 hover:border-red-400 rounded-md transition-colors duration-200 flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 text-gray-500 hover:text-red-500 transition-colors duration-200" 
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

            {/* Additional Info (Optional - based on available data) */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Category</span>
                  <p className="font-medium text-gray-900 mt-1">{food.category}</p>
                </div>
                <div>
                  <span className="text-gray-500">Item ID</span>
                  <p className="font-medium text-gray-900 mt-1">#{food.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
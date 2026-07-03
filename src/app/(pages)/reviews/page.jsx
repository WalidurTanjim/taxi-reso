import React from 'react'
import ReviewCard from './[id]/page';

const getReviews = async() => {
     try{
          const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/reviews`)
          const data = await res.json();
          return data.reviews || []
     }catch(err) {
          console.error(err);
          return null
     }
}

const ReviewsPage = async() => {
     const reviews = await getReviews();

     return (
          <div className='reviews px-2 md:px-5 lg:px-8 py-10'>
               <h1 className='text-2xl text-slate-700 text-center font-medium'>All Reviews</h1>

               <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 py-10'>
                    {
                         reviews.map(review => <ReviewCard key={review.id} review={review} />)
                    }
               </div>
          </div>
     )
}

export default ReviewsPage

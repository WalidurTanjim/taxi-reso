import CommentCard from '@/components/CommentCard/CommentCard';
import React from 'react'

const getComments = async() => {
     try{
          const res = await fetch(`http://localhost:3000/api/comments`);
          const data = await res.json();
          return data.data || []
     }catch(err) {
          console.error(err);
          return null;
     }
}

const CommentsPage = async() => {
     const comments = await getComments();

     return (
          <div className='w-full px-2 md:px-5 lg:px-8 py-10'>
               <h1 className='text-2xl text-slate-700 text-center font-medium'>All Comments</h1>

               <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 mg:grid-cols-4 xl:grid-cols-5 my-10'>
                    {
                         comments.map(comment => <CommentCard key={comment._id} comment={comment} />)
                    }
               </div>
          </div>
     )
}

export default CommentsPage
